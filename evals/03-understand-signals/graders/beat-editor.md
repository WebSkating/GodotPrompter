---
type: llm
focus: last_message
weight: 0.5
---
Pass if the answer describes the editor-side setup the feature needs, at node/Inspector level. Any of these count as editor setup: which nodes to add (by node type); Inspector properties or values to set; exported variables to wire; resources to assign; autoload registration (script path + node name); input actions to create. Saying "no new nodes needed" plus naming what to set up in the editor also passes. Fail only if the answer gives no editor-side guidance at all.
