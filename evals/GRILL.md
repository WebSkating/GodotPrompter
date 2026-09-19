# godot-grill eval — baseline and results

Suite: 3 cases (1 should-fire, 2 guards against over-triggering) for `godot-grill`.

```
claude plugin eval . --case "grill-*" --ablation with-without --judge-model sonnet --no-publish
```

## Red — before the skill exists (`results/2026-09-19T20-45-02-487Z`)

| Case | With | Without | Δ | Notes |
|---|---|---|---|---|
| grill-01-new-system | 0.42 | 0.25 | +0.17 | trigger-grill 0/3 (Skill called 0x); scope-first 0/3; numbered-recommended 0/3; no-fact-questions 2/3 |
| grill-02-skip-questions | 1.00 | 0.67 | +0.33 | trigger-grill 0/3 (Skill called 0x) |
| grill-03-neg-bugfix | 1.00 | 1.00 | 0.00 | trigger-grill 0/3 (Skill called 0x) — desired direction, must not fire |
