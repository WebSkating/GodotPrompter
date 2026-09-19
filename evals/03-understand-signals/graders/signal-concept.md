---
type: llm
focus: last_message
---
Pass only if ALL hold:
(1) The answer explains what a signal is and why using one is better here than the coin holding a direct reference to the score label (decoupling).
(2) The code declares a custom signal (GDScript `signal ...` / C# [Signal] delegate) and connects it with Godot 4 syntax (signal.connect(callable), C# += or Connect with a Callable) — not Godot 3 string-based connect("sig", self, "fn").
(3) Because the user is intermediate, the conceptual explanation is concise (roughly 4 sentences or fewer before moving to setup/code), not a beginner tutorial on what nodes are.
