---
trigger: always_on
---

# Harness Rules

Execution environment rules for internal agent utilities and target project toolchains.

## Agent Utility & Automation Stack

For scratch scripts, data processing, and internal agent tooling (strictly Python standard library, zero external dependencies):
- **Language**: Python (plain `python3`, strictly stdlib only)
- **Serialization**: `json` (stdlib)
- **Async**: `asyncio` (stdlib)
- **HTTP**: `urllib.request` (stdlib, simple calls). Delegate complex auth/multipart calls to MCP tools or system CLI (`curl`, `gh`)
- **DB / Storage**: `sqlite3` (stdlib), `dbm` / `shelve` (stdlib) for key-value persistence
- **Data Processing**: stdlib (`csv`, `itertools`, `collections`, `re`)
- **CLI**: `argparse` (stdlib)
- **Env**: `os` (`os.environ`, `os.getenv` stdlib; basic string parsing if reading `.env`)

## Project Commands & Toolchain

Target project lifecycle commands delegated to project manifests and language skills:
- **Project Isolation**: Target application dependencies follow project manifests (`pyproject.toml`, `Cargo.toml`, `package.json`). Not restricted to agent utility stack above.
- **Delegation**: Language skills and project manifests define runners, linters, and test frameworks.
- **Missing Manifest**: Target stack must be specced in [SPEC.md](../SPEC.md) before manifest creation. If spec or manifest missing, trigger [context-aware-init skill](../skills/context-aware-init/SKILL.md) to bootstrap [SPEC.md](../SPEC.md) and toolchain.
- **Token Optimization (rtk)**: Prefix terminal commands (`git status/diff/log`, test runs, linter checks, etc.) with `rtk`. Missing or fails → run plain command. See [rtk skill](../skills/rtk/SKILL.md).
