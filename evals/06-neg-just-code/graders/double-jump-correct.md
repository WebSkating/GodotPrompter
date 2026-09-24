---
type: llm
focus: last_message
---
Pass if the GDScript is valid Godot 4 (extends CharacterBody2D or CharacterBody3D, uses the velocity property and move_and_slide() with no arguments, @export/@onready if annotations are used) and implements a double jump correctly: a counter or flag that allows exactly one extra jump in the air and resets when is_on_floor() is true.
