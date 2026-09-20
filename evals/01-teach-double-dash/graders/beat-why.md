---
type: llm
focus: last_message
weight: 0.5
---
Pass if the answer explains WHY it made its central choice, contrasting it with at least one named alternative and giving a reason, where the alternative and reason are about the central feature being taught — not an incidental aside about something else (e.g. a for loop vs. a while loop mentioned in passing when the feature being taught is a dash). The alternative can be a Godot node, resource type, or API ("Area2D rather than checking distance every frame", "a signal rather than polling in _process", "ConfigFile rather than JSON for a single value") OR an approach or technique ("a timed velocity override rather than a one-frame impulse, because friction eats the impulse", "a counter rather than a bool, because it generalises to more than two jumps"). Fail if the answer only asserts its choice with no named alternative, or names an alternative but gives no reason.
