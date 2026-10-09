#!/usr/bin/env python3
"""Project initialization and repair script.

Scans load.md and structure.md for expected files, seeds missing documentation
from bundled templates, audits ignores, and bootstraps project manifests.
"""

import argparse
import os
import re
import shutil
import sys
from pathlib import Path


def find_workspace_root() -> Path:
    current = Path(__file__).resolve().parent
    while current != current.parent:
        if (current / ".agents").is_dir() or (current / ".git").is_dir():
            return current
        current = current.parent
    return Path.cwd()


def get_expected_files(workspace_root: Path) -> dict:
    """Parse load.md and structure.md to extract expected files."""
    agents_dir = workspace_root / ".agents"
    expected = {
        "SPEC.md": agents_dir / "SPEC.md",
        "BACKLOG.md": agents_dir / "BACKLOG.md",
        "PROGRESS.md": agents_dir / "PROGRESS.md",
        "PROGRESS_ARCHIVE.md": agents_dir / "PROGRESS_ARCHIVE.md",
        ".agentignore": workspace_root / ".agentignore",
        ".gitignore": workspace_root / ".gitignore",
    }

    # Also parse structure.md if available
    structure_file = agents_dir / "rules" / "structure.md"
    if structure_file.is_file():
        text = structure_file.read_text(encoding="utf-8")
        matches = re.findall(r"\*\*([A-Za-z0-9_]+\.md)\*\*(?!\s*\(Optional\))", text)
        for m in matches:
            if m not in expected:
                expected[m] = agents_dir / m

    return expected


def check_missing(workspace_root: Path, expected: dict) -> list:
    missing = []
    for name, path in expected.items():
        if not path.exists():
            missing.append((name, path))
    return missing


def seed_missing_file(name: str, target_path: Path, templates_dir: Path) -> bool:
    template_map = {
        "SPEC.md": templates_dir / "SPEC.md.template",
        "BACKLOG.md": templates_dir / "BACKLOG.md.template",
        "PROGRESS.md": templates_dir / "PROGRESS.md.template",
        "PROGRESS_ARCHIVE.md": templates_dir / "PROGRESS_ARCHIVE.md.template",
        ".agentignore": templates_dir / "agentignore.template",
        ".gitignore": templates_dir / "gitignore.template",
    }

    template_file = template_map.get(name)
    if template_file and template_file.is_file():
        target_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(template_file, target_path)
        return True
    return False


def seed_manifest(workspace_root: Path, stack: str) -> bool:
    stack = stack.lower()
    if stack in ("python", "py"):
        manifest = workspace_root / "pyproject.toml"
        if not manifest.exists():
            manifest.write_text(
                '[project]\nname = "app"\nversion = "0.1.0"\nrequires-python = ">=3.10"\ndependencies = []\n\n'
                '[build-system]\nrequires = ["setuptools>=61.0"]\nbuild-backend = "setuptools.build_meta"\n',
                encoding="utf-8",
            )
            return True
    elif stack in ("rust", "rs"):
        manifest = workspace_root / "Cargo.toml"
        if not manifest.exists():
            manifest.write_text(
                '[package]\nname = "app"\nversion = "0.1.0"\nedition = "2021"\n\n[dependencies]\n',
                encoding="utf-8",
            )
            return True
    elif stack in ("node", "js", "ts", "javascript", "typescript"):
        manifest = workspace_root / "package.json"
        if not manifest.exists():
            manifest.write_text(
                '{\n  "name": "app",\n  "version": "0.1.0",\n  "private": true,\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  }\n}\n',
                encoding="utf-8",
            )
            return True
    return False


def main():
    parser = argparse.ArgumentParser(description="Check and seed project structure and manifests.")
    parser.add_argument("--check", action="store_true", help="Only check for missing files without writing.")
    parser.add_argument("--seed", action="store_true", help="Seed missing files from bundled templates.")
    parser.add_argument("--stack", type=str, choices=["python", "rust", "node"], help="Bootstrap manifest for stack.")
    args = parser.parse_args()

    workspace_root = find_workspace_root()
    templates_dir = Path(__file__).resolve().parent.parent / "templates"
    expected = get_expected_files(workspace_root)
    missing = check_missing(workspace_root, expected)

    print(f"Workspace root: {workspace_root}")
    if missing:
        print(f"Missing items ({len(missing)}):")
        for name, path in missing:
            print(f"  - {name} ({path})")
    else:
        print("All expected core documents and ignores present.")

    if args.check:
        sys.exit(1 if missing else 0)

    if args.seed:
        seeded_count = 0
        for name, path in missing:
            if seed_missing_file(name, path, templates_dir):
                print(f"Created: {path}")
                seeded_count += 1
            else:
                print(f"No template available for: {name}")
        print(f"Seeded {seeded_count} file(s).")

    if args.stack:
        if seed_manifest(workspace_root, args.stack):
            print(f"Bootstrapped manifest for stack: {args.stack}")
        else:
            print(f"Manifest for stack {args.stack} already exists or failed to create.")


if __name__ == "__main__":
    main()
