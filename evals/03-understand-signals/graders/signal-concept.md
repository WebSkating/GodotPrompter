---
type: llm
focus: last_message
---
Pass only if ALL hold:
(1) The answer explains what a signal is and why using one is better here than the coin holding a direct reference to the score label (decoupling).
(2) The code declares a custom signal (GDScript `signal ...` / C# [Signal] delegate) and connects it with Godot 4 syntax (signal.connect(callable), C# += or Connect with a Callable) — not Godot 3 string-based connect("sig", self, "fn").
(3) The user is intermediate but named signals as the thing confusing them, so the signal concept may be explained in depth. Everything else must stay at intermediate level: fail if the answer explains general Godot basics the user did not ask about (what a node or scene is, how to attach a script, what the Inspector is).
