---
type: llm
focus: last_message
---
Pass only if ALL hold:
(1) The answer explains what a signal is and why using one is better here than the coin holding a direct reference to the score label (decoupling).
(2) The code declares a custom signal (GDScript `signal ...` / C# [Signal] delegate) and connects it with Godot 4 syntax (signal.connect(callable), C# += or Connect with a Callable) — not Godot 3 string-based connect("sig", self, "fn").
(3) Outside the signal explanation, the answer does not teach general Godot basics an intermediate user already knows — e.g. what a node or scene is, how to attach a script, what the Inspector is. (The user named signals as their confusion, so explaining signals at length is expected and passes. Pointing out non-obvious wiring — collision layers/masks, groups, CanvasLayer placement, where to connect — is not "basics" and passes.)
