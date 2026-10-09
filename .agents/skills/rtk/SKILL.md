---
name: rtk
description: Wrap terminal commands with rtk (Rust Token Killer) to compress output and save tokens. Covers install check, supported commands, fallback when rtk missing or output over-filtered. Use when running git, test, lint, build, or listing commands.
---
# RTK (Rust Token Killer)

## Steps

1. **Check install**: `command -v rtk`. Missing → run plain commands, tell user once. Install only on user OK: `cargo install --git https://github.com/rtk-ai/rtk`.
2. **Find equivalent**: Unsure if command supported → `rtk rewrite "<cmd>"`. Prints rtk form if supported, empty if not. Empty → run plain command.
3. **Run**: Prefix supported command with `rtk`.
4. **Detail missing**: Filtered output hides needed info → rerun with `rtk proxy <cmd>` (unfiltered, tracked) or plain command.

## Common Commands

| Plain | rtk |
| --- | --- |
| `git status` / `diff` / `log -n 5` | `rtk git status` / `rtk git diff` / `rtk git log -n 5` |
| `ls`, `tree`, `find . -name '*.py'` | `rtk ls`, `rtk tree`, `rtk find . -name '*.py'` |
| `grep -rn foo src` / `rg foo` | `rtk grep -rn foo src` / `rtk rg foo` |
| `pytest`, `cargo test`, `vitest` | `rtk pytest`, `rtk cargo test`, `rtk vitest` |
| `ruff check`, `mypy .`, `tsc`, `eslint` | `rtk ruff check`, `rtk mypy .`, `rtk tsc`, `rtk lint` |
| Any cmd, errors only | `rtk err <cmd>` |
| Any test cmd, failures only | `rtk test <cmd>` |

Full list: `rtk --help`.

## Rules

- Skip rtk for interactive commands, piped/redirected output consumed by scripts, and commands whose exact raw output matters (e.g. writing files, parsing).
- Never retry failing command blindly under rtk; check plain command first to separate tool error from rtk error.

