---
trigger: always_on
---

# Workflow Rules

## Init

1. Define success criterion first. Know what "done" is, ask if not sure.
2. Verify task in `SPEC.md` before build.

## Blocker Protocol

1. Log blocker in [PROGRESS.md](../PROGRESS.md).
2. Move to next unblocked task.

### Unresolvable Blockers

If task fails repeatedly with no way out:

1. Document in [PROGRESS.md](../PROGRESS.md).
2. Move to next unblocked task.

## Done Protocol

1. Verify tech: check [qa rules](./qa.md).
2. Verify scope: check [SPEC.md](../SPEC.md).
3. Log: update [PROGRESS.md](../PROGRESS.md).
4. Commit: run commit/tag protocol.

## Archive

- Archive PROGRESS.md to PROGRESS_ARCHIVE.md when > 3 sessions.

## Commit

- Trigger: task done or session logged.
- Atomic: one logical change per commit.
- Session tag: tag last commit of session as `session-XX`.
- Branches: never push to `main`/`master`. Use `dev`, then feature branch off `dev`.
- Tag: only substantial edits, 2 words max hyphenated (e.g., `db-refactor`).

## Scope Limit

- Pre-task: if task spans > 7 files or > 2 dirs, split into subtasks before starting.
- Mid-task: do not abort mid-implementation for scope reasons.
