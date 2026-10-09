---
name: audit-skills
description: Audit agent skills folder for structural correctness, line length constraints, and link validity. Use when checking skills structure, validating skills, or running skill audit.
---
# Audit Skills

Quality and compliance check for agent skills. Detect structural issues, unsupported frontmatter tags, broken relative links.

## Goal

Detect structural issues, missing frontmatter, name mismatches, unsupported frontmatter tags, and broken relative links. **Strictly read-only diagnostic process. Do NOT edit, modify, or create any files in repo during audit. Report findings by writing audit report as artifact (`skills_audit_report.md`) in artifact directory, and providing brief summary in chat.**

## Quick Start

Run script from root to generate skills audit report in artifact directory:

```bash
python .agents/skills/audit-skills/scripts/audit_skills.py --output [artifact_directory]/skills_audit_report.md
```

## Workflows

### 1. Run Audit
- Run Python audit script with `--output` directing to the artifact directory.
- Review generated artifact `skills_audit_report.md`:
  - **Broken Links**: check missing files / bad relative paths.
  - **SKILL.md Consistency**: check line limits (>180), missing frontmatter, name mismatches, unsupported tags.
  - **Summary**: counts and exit status.

### 2. Identify Issues
- **Broken links**: update link path to correct relative path.
- **Line limit**: if skill >180 lines, extract secondary content to separate files under `reference/` or `examples/`.
- **Frontmatter format**: only supported tags `name` and `description`. Description under 300 chars, blending capability and triggers.
- **Section mismatch**: ensure skill has Quick Start section + Workflow/Steps section.
- **YAML Name mismatch**: ensure `name` in frontmatter matches directory name.
