# godot-mentor eval — baseline and follow-ups

Suite: 7 cases (5 should-fire, 2 should-NOT-fire) testing the `godot-mentor` skill.

```
claude plugin eval . --ablation with-without --judge-model sonnet --no-publish
```

~50 min, ~$15 per full run (runs: 3). Judge must stay sonnet (agent runs on Opus — never self-judge).

## Baseline — v1.13.3, 2026-09-19 (`results/2026-09-19T15-56-37-946Z`)

Mean **Δ +0.17**, $14.86, 0 errors/timeouts.

| Case | With | Without | Δ |
|---|---|---|---|
| 01-teach-double-dash | 0.90 | 0.56 | +0.33 |
| 02-guide-health-bar | 0.88 | 0.79 | +0.08 |
| 03-understand-signals | 0.88 | 0.60 | +0.27 |
| 04-learning-3d-pickup | 0.98 | 0.73 | +0.25 |
| 05-csharp-learner-save | 0.94 | 0.70 | +0.24 |
| 06-neg-just-code | 1.00 | 1.00 | 0.00 |
| 07-neg-experienced-quick | 1.00 | 1.00 | 0.00 |

With-arm side-channels: 86–149 s, 7–10 turns, $0.50–0.76/run. Ceilings: 300 s, 12 turns.
Negatives must stay at Δ 0 — a drop means mentor mode is lecturing people who did not ask.

## Skill follow-ups (found by the eval — skill not yet changed)

1. **Scope rule not holding.** Case 02 failed `no-scope-creep` 3/3: every with-arm run added a
   tweened bar animation; runs 1–2 also added `heal()` and a `died` signal. Base model stayed in
   scope. Case 05 failed it once. `godot-mentor` §2 "Explanation, not scope" is not strong enough.
   → Expect case 02 Δ to move most when fixed.
2. **Intermediate calibration ignored.** Case 03 failed `signal-concept` 2/3 (and in every pilot):
   multi-paragraph Concept beat for a self-described intermediate user, where §4 says "one or two
   sentences on the trade-off only".
3. **Beat 5 swallows the requested feature.** Case 01 run 2 shipped a dash with no cooldown/limit
   (spammable), then offered the cooldown as the "next step" plus a second bracketed idea. The
   "put the rest in Beat 5" guidance invites deferring part of what was asked.
4. **State-file write has no graceful fallback.** When no Write/Bash tool is available, the agent
   still tries to write `~/.godot-prompter/state/`, then posts a separate housekeeping message.
   Pilot 3 case 01: 174 s / $1.33 (vs ~$0.60), and the lesson ended up in a non-final message.
   The skill should say: if you cannot write state, mention it in one line inside the answer and
   move on.
5. **Domain skill not always loaded.** Pilot 1 case 05 loaded only `godot-mentor`, not `save-load`,
   despite §1's wrapping rule. That answer also claimed sibling `_ready()` order is bottom-to-top
   (wrong — siblings are ready in tree order; children before parents).

## Known eval limitations

- `no-scope-creep` on 03 can split votes (noisy).
- Graders read `last_message`; if the answer is split across messages (follow-up 4) the run scores
  low even though the user saw the lesson. Do NOT switch to `trace` — regexes would match the
  SKILL.md text itself.
- `no-menu-paths` only catches top-menu paths (`Project → Project Settings`); panel→tab forms such
  as `Project Settings → Autoload` are allowed by author decision.
- `evals/results/` holds run output and is gitignored; record baselines in this file.
