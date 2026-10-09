---
name: context-aware-init
description: Stack-aware repository initialization and repair protocol. Use when initializing repository, setting up folder structure, or repairing stack configuration.
---
# Context-Aware Initialization Skill

Technical foundation initialization and repair for target stacks and agent workflows.

## Goal

Establish or repair technical foundation pre-optimized for tech stack, doc structures, and AI-friendly ignores.

## Automation Script

Deterministic checker and seeder script located at [init_project.py](./scripts/init_project.py):
- Check status: `python3 .agents/skills/context-aware-init/scripts/init_project.py --check`
- Seed missing core files: `python3 .agents/skills/context-aware-init/scripts/init_project.py --seed`
- Bootstrap manifest: `python3 .agents/skills/context-aware-init/scripts/init_project.py --stack <python|rust|node>`

## Steps

1. **Stack & State Detection**:
   - Detect project languages, tools, and whether Git initialized (`git status`).
   - Check presence of manifests (`pyproject.toml`, `Cargo.toml`, `package.json`).

2. **Load Rule & Document Audit**:
   - Inspect [load rules](../../rules/load.md) and [structure rules](../../rules/structure.md) for expected files.
   - Run `python3 .agents/skills/context-aware-init/scripts/init_project.py --check`.
   - If missing core files (`SPEC.md`, `BACKLOG.md`, `PROGRESS.md`, `PROGRESS_ARCHIVE.md`), seed them via script or copy from [templates/](./templates/):
     - `SPEC.md` from [SPEC.md.template](./templates/SPEC.md.template)
     - `BACKLOG.md` from [BACKLOG.md.template](./templates/BACKLOG.md.template)
     - `PROGRESS.md` from [PROGRESS.md.template](./templates/PROGRESS.md.template)
     - `PROGRESS_ARCHIVE.md` from [PROGRESS_ARCHIVE.md.template](./templates/PROGRESS_ARCHIVE.md.template)

3. **Tech Stack & Manifest Bootstrapping**:
   - Target stack must be recorded in [SPEC.md](../../SPEC.md) Section 3 (Tech Stack) before manifest creation.
   - If manifest missing, bootstrap using toolchain command (`cargo init`, `npm init -y`) or `init_project.py --stack <stack>`.

4. **Environment & Ignores Configuration**:
   - **Git**: If repo missing, run `git init`.
   - **.gitignore**: Create if missing from [gitignore.template](./templates/gitignore.template). If existing, append missing build and env entries without overwriting. Ensure Python `.venv/` ignored.
   - **.agentignore**: Create if missing from [agentignore.template](./templates/agentignore.template). Ensure large/binary dirs (`node_modules`, `.venv`, `target`) hidden from AI context.
   - **Python Env**: If Python workflow detected, initialize local virtual environment (`python3 -m venv .venv`).

5. **Structure Scaffolding**:
   - Create standard application folders (`src/`, `tests/`) if absent and appropriate for detected stack.

6. **Verification & Commit**:
   - Verify syntax of created manifests and ignores.
   - Commit initial changes following [atomic-commit](../atomic-commit/SKILL.md).
