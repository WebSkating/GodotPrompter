---
type: llm
focus: last_message
---
Pass only if ALL hold:
(1) The pickup uses an Area3D with a CollisionShape3D child and reacts to the body_entered signal.
(2) It filters for the player (group check, class check, or collision layer/mask) rather than reacting to any body.
(3) It mentions collision layers/masks (or monitoring) as a setting the beginner must get right.
(4) The item is removed with queue_free() (not free()).
