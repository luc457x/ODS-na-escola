---
name: write-a-skill
description: Create new agent skills with proper structure, progressive disclosure, and bundled resources. Use when creating, writing, or building new skills.
---
# Writing Skills

## Process

1. **Gather requirements** — ask user about:
   - What task/domain does skill cover?
   - What specific use cases to handle?
   - Does it need executable scripts or just instructions?
   - Any reference materials to include?

2. **Draft skill** — create:
   - SKILL.md with concise instructions
   - Additional reference files if content exceeds 500 lines
   - Utility scripts if deterministic operations needed

3. **Review with user** — present draft and ask:
   - Does this cover your use cases?
   - Anything missing or unclear?
   - Should any section be more/less detailed?

4. **Validate skill** — run skill quality auditor to check structural correctness and links for new skill:
    ```bash
    python .agents/skills/audit-skills/scripts/audit_skills.py --skill [skill_name]
    ```
    Fix reported issues (broken links, line limit breaches, name mismatches, unsupported frontmatter tags) before commit.

## Skill Structure

```text
skill-name/
├── SKILL.md           # Main instructions (required)
├── reference/         # Detailed docs (if needed)
├── examples/          # Usage examples (if needed)
└── scripts/           # Utility scripts (if needed)
```

## SKILL.md Template

```md
---
name: skill-name
description: Concise description of capability and triggers.
---
```

## Description and Trigger Requirements

Frontmatter contains only `name` and `description` tags. Description is primary field agent sees when deciding which skill to load.

**Goal**: Give agent just enough info to know what capability skill provides and when to use it, blended into concise description.

**Format**:
- `name`: Matches skill directory name.
- `description`: Max 300 chars, third person, what skill does and when to use it. No articles (caveman style).
- No other frontmatter tags allowed (no `when_to_use`, no `metadata`).

**YAML vs. Markdown Body Rules**:
- Triggers MUST be blended into frontmatter `description`.
- Frontmatter fields MUST be concise to avoid token waste.
- "When to Use" or "Quick Start" section in markdown body optional. Do not duplicate simple frontmatter triggers in body.
- If trigger conditions too complex for frontmatter description, write complete "When to Use" section in body, and write shorter summary trigger in frontmatter pointing agent to read full file.

Good example:
```yaml
---
name: pdf_utility
description: Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDF files or extracting documents.
---
```

Bad example:
```yaml
---
name: pdf_utility
description: Helps with documents.
when_to_use: anytime
metadata:
  category: development
---
```

Bad example uses unsupported tags and vague description.

## When to Add Scripts

Add utility scripts when:

- Operation deterministic (validation, formatting)
- Same code would be generated repeatedly
- Errors need explicit handling

**Scripts save tokens and improve reliability vs generated code.**

## When to Split Files

Split into separate files when:

- SKILL.md exceeds 180 lines
- Content has distinct domains (finance vs sales schemas)
- Advanced features rarely needed

## Review Checklist

After drafting, verify:

- [ ] Frontmatter contains only `name` and `description` tags
- [ ] Frontmatter description blends capability and triggers under 300 characters
- [ ] Frontmatter description enforces caveman style (no articles: a/an/the)
- [ ] YAML name matches skill directory name
- [ ] SKILL.md under 180 lines
- [ ] No time-sensitive info
- [ ] Consistent terminology
- [ ] Concrete examples included
- [ ] References one level deep
