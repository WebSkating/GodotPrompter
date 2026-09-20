# godot-grill eval — baseline and results

Suite: 3 cases (1 should-fire, 2 guards against over-triggering) for `godot-grill`.

```
claude plugin eval . --case "grill-*" --ablation with-without --judge-model sonnet --no-publish
```

## Red — before the skill exists (`results/2026-09-19T20-45-02-487Z`)

| Case | With | Without | Δ | Notes |
|---|---|---|---|---|
| grill-01-new-system | 0.42 | 0.25 | +0.17 | trigger-grill 0/3 (Skill called 0x); scope-first 0/3; numbered-recommended 0/3; no-fact-questions 2/3 |
| grill-02-skip-questions | 1.00 | 0.56 | +0.44 | trigger-grill 0/3 (Skill called 0x); numbers are from the re-measured run `results/2026-09-19T21-26-50-189Z`, not this heading's run — see below |
| grill-03-neg-bugfix | 1.00 | 1.00 | 0.00 | trigger-grill 0/3 (Skill called 0x) — desired direction, must not fire |

grill-01's row was graded under the pre-reword `no-fact-questions` (it failed asking the tree's
Dimension and Language roots) and is not directly comparable to the Green row's `no-fact-questions`
figure below — the Δ itself is unaffected, since both arms of a run share a grader.

grill-02 re-measured in `results/2026-09-19T21-26-50-189Z` after its prompt was narrowed to a design and its timeout raised to 600 s — the first run (`results/2026-09-19T20-45-02-487Z`) timed out 4/6 and graded interim messages, scoring grill-02 1.00 / 0.67 / +0.33 there.

## Green — with the skill (`results/2026-09-19T21-46-25-912Z`, grill-01 re-measured in `results/2026-09-19T22-07-19-458Z`)

| Case | With | Without | Δ | Notes |
|---|---|---|---|---|
| grill-01-new-system | 1.00 | 0.33 | +0.67 | all five graders 3/3 (no-code-yet, no-fact-questions, numbered-recommended, scope-first, trigger-grill "Skill called 1x") |
| grill-02-skip-questions | 0.78 | 1.00 | -0.22 | assumptions-stated 3/3; no-questions 2/3 (one with-run FAIL FAIL FAIL); trigger-grill 0/3 (Skill called 0x) |
| grill-03-neg-bugfix | 1.00 | 1.00 | 0.00 | fixes-bug 3/3; no-questions 3/3; trigger-grill 0/3 (Skill called 0x) — desired direction, does not fire |

grill-01 was re-measured after its `no-fact-questions` grader was reworded: the first green run
(`results/2026-09-19T21-46-25-912Z`) scored it 0/3 for asking the tree's Dimension and Language
roots, which the spec makes the user's to state, not the assistant's. Under the corrected wording
(distinguishing the four root decisions and feature choices, always the user's, from implementation
choices like a node/class/API/storage tech, which the assistant should decide) the re-run scored
`no-fact-questions` 3/3 and every grader 3/3.

Ruling: grill-02's -0.22 is not a grill regression — `trigger-grill` reads "Skill called 0x" in all
three with-arm runs, so the skill never fired; the score drop is one with-arm run asking a question
on its own (base-model variance), not the skill's doing.

Mentor regression (`results/2026-09-20T09-53-37-633Z`): mean Δ +0.21, 0 errors/timeouts, $14.83; no
case outside ±0.15 of the FOLLOWUPS confirming-run table; negatives 06/07 held at Δ 0.

## Limitations

- **grill-02 exercises nothing about the skill.** `trigger-grill` reads "Skill called 0x" in both
  the red and green runs — the skill never fires for this case in either arm. Its score moves for
  other reasons (base-model variance, grader wording), not because `godot-grill` did anything.
  The first-message off-ramp in the skill's §4 ("just build it" on the very first message) is
  therefore covered only by manual `TEST_PLAN` Test 6.1, not by this eval suite.
- **No eval covers an ordinary, un-grill-phrased feature request** (e.g. "add a basic inventory
  system") that has open design decisions but never says "grill me" or names a bug. The
  description's breadth between an explicit grill request (fires 3/3) and a bug report (0/3) is
  unmeasured in between.
- The reworded `no-fact-questions` always passes a question on any of the four root decisions
  (scope, dimension, language, authority). It cannot catch a grill that asks a root the project
  has already answered — `skills/godot-grill/SKILL.md` §2 says to skip those, but no grader checks
  it.
