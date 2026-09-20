---
type: llm
focus: last_message
---
Pass if the health bar is a Control-based node (ProgressBar or TextureProgressBar, typically under a CanvasLayer) AND its value is updated in response to a signal emitted by the player (e.g. health_changed) rather than by polling the player's health every frame in _process. Fail if it polls in _process/_physics_process, or draws the bar with Node2D drawing.
