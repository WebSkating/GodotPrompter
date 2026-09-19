---
type: llm
focus: last_message
---
Pass if every question asks about something only the user can know — intent, constraints, priorities, taste (e.g. scope, grid vs. list, stacking rules, whether items persist). Fail if any question asks the user to choose a Godot node type, class, or API (e.g. "Control or Node2D?", "Resource or Dictionary?", "ItemList or GridContainer?") — those are facts the assistant should decide.
