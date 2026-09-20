---
type: llm
focus: last_message
---
Pass if the dash is implemented on a CharacterBody2D by setting velocity for a limited duration (timer or countdown) with a cooldown or once-per-air/ground limit, still calls move_and_slide() (no arguments, Godot 4 style), and does not permanently break gravity (gravity resumes, or is intentionally suspended only during the dash). Fail if the dash is an instant position teleport, has no duration limit, or uses Godot 3 APIs.
