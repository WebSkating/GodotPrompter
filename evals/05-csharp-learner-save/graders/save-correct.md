---
type: llm
focus: last_message
---
Pass only if ALL hold:
(1) The high score is written under a user:// path (not res://, not a hardcoded OS path).
(2) It uses Godot 4 C# APIs — FileAccess.Open, ConfigFile, or Json — not Godot 3 File/Directory classes.
(3) Loading handles the save file not existing yet (e.g. FileAccess.FileExists, or checking the Error/null return) instead of crashing.
