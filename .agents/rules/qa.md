---
trigger: always_on
---

# QA Protocol

Quality gates required across projects:

1. **Syntax / Build**: Code executes / compiles without syntax errors or unhandled exceptions.
2. **Lint / Format**: Style clean, passes project linters.
3. **Clean**: No temporary debug logs (`print`, `dbg!`), draft comments, or temp files. Intentional CLI stdout and standard logging frameworks allowed.
4. **Tests**: Run suite. 0 failures across unit, integration, E2E.
5. **Smoke**: Follow and verify happy path steps explicitly defined in [SPEC.md](../SPEC.md).

