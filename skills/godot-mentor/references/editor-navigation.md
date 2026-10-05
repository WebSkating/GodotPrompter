# Editor Navigation — where things are (Godot 4.3 to 4.7)

Reference for `skills/godot-mentor/SKILL.md` — the editor's main screens, docks, bottom panels,
and Project Settings tabs, with the versions each location applies to.

> ← Back to [SKILL.md](../SKILL.md)

Unflagged entries are the same in every version from 4.3 to 4.7. Verified against the
godot-docs branches and the engine source for each version; see
`docs/superpowers/notes/2026-10-05-godot-editor-research.md` in the GodotPrompter repository.

---

How to read the tables:

- A cell holding only "—" means the research did not establish that fact. Say so to the learner
  rather than filling it in.
- **Bold** text is a label as the editor displays it. Where the Godot docs use a different word
  for the same thing, the docs' word is given in quotes.
- The Versions column uses ranges: 4.3-4.5 means 4.3, 4.4 and 4.5; 4.6+ means 4.6 and 4.7.

## Main screens

The top edge of the editor window holds the main menu on the left, the main screen (workspace)
buttons in the centre with the active one highlighted, and the playtest buttons on the right.
Below the main screen buttons, the opened scenes appear as tabs; the plus (+) button next to the
tabs adds a new scene, and the button on the far right toggles distraction-free mode.

The main screen buttons, left to right, are **2D**, **3D**, **Script**, **AssetLib** on 4.3;
**2D**, **3D**, **Script**, **Game**, **AssetLib** on 4.4-4.6; and **2D**, **3D**, **Script**,
**Game**, **Asset Store** on 4.7.

| Area | What it is for | Default location | Reopen it if closed | Versions |
|---|---|---|---|---|
| **2D** | The workspace the editor changes to when a scene's first node is a 2D node type such as Label | Top centre, first main screen button | Click the **2D** button | 4.3-4.7 |
| **3D** | — | Top centre, second main screen button | Click the **3D** button | 4.3-4.7 |
| **Script** | Where a script opens after you create it or connect a signal to it; a "Search Help" button sits in its top-right | Top centre, third main screen button | Click the **Script** button | 4.3-4.7 |
| **Game** | Where your project appears when you run it from the editor. Changes made here are not saved when the game stops running | Does not exist | — | 4.3 |
| **Game** | Same as above | Top centre, fourth main screen button | Click the **Game** button | 4.4+ |
| **AssetLib** (the docs call it "Asset Library") | The Asset Library inside the editor; add-ons are downloaded there with the **Download** button | Top centre, last main screen button | Click the **AssetLib** button | 4.3-4.6 |
| **Asset Store** (the 4.7 docs still call it "Asset Library" and "AssetLib") | Same purpose as **AssetLib** above; on 4.7 the button reads **Asset Store** | Top centre, last main screen button | Click the **Asset Store** button | 4.7 |

The playtest buttons in the top-right include **Run Project** (F5; Cmd + B on macOS) and
**Run Current Scene** (F6; Cmd + R on macOS). Stop a running scene by closing its window or
pressing F8 (Cmd + . on macOS).

## Docks

The docks sit on either side of the viewport. To move one, click the "3 vertical dots" icon at
the top of the dock and choose a new location, or choose **Make Floating** in the submenu that
appears to split it into a separate window. Click and drag the edge of any dock or panel to
resize it. The locations below are the defaults; they change once a learner has moved a dock.

How to bring back a dock that has been closed is not established for any dock, so that column
is "—" throughout. The **Editor** menu has an **Editor Docks** submenu and an **Editor Layout**
submenu (see Top menus), but what the first one lists was not researched.

| Area | What it is for | Default location | Reopen it if closed | Versions |
|---|---|---|---|---|
| **Scene** | Shows the scene's nodes: a node you add appears here. The button the docs call "Add Child Node" is at its top-left; its tooltip reads **Add/Create a New Node.** While a game runs from the editor, **Remote** and **Local** options appear at its top | Left side, upper slot, first tab | — | 4.3-4.7 |
| **Import** | Shows the import parameters of the resource selected in the **FileSystem** dock; click **Reimport** after changing them | Left side, upper slot, second tab (after **Scene**) | — | 4.3-4.7 |
| **FileSystem** | Shows your project folders and files. Double-click a scene file to open it; drag files onto it from the operating system's file manager to add them | Left side, lower slot (the lower left corner) | — | 4.3-4.7 |
| **Inspector** | Shows the selected node's properties | Right side, first tab | — | 4.3-4.7 |
| **Node** | Holds two buttons, **Signals** and **Groups**. With nothing selected it reads "Select a single node to edit its signals and groups." | Right side, second tab (next to **Inspector**) | — | 4.3-4.5 |
| **Node** | Does not exist; it was split into the **Signals** and **Groups** docks | — | — | 4.6+ |
| **Signals** | Lists the signals available on the selected node; double-click one to open the connection window | Not a dock: the **Signals** button inside the **Node** dock | — | 4.3-4.5 |
| **Signals** | Same as above | Right side, second tab (next to **Inspector**) | — | 4.6+ |
| **Groups** | Where you create groups and tick the groups the selected node belongs to | Not a dock: the **Groups** button inside the **Node** dock | — | 4.3-4.5 |
| **Groups** | Same as above | Right side, third tab (after **Signals**) | — | 4.6+ |
| **History** | — | Right side, third tab (after **Inspector** and **Node**) | — | 4.3-4.5 |
| **History** | — | Left side, lower slot, second tab (after **FileSystem**) | — | 4.6+ |

## Bottom panels

The bottom panel lies at the bottom of the window. Its panels are folded by default; clicking
one expands it vertically. Bottom panels can also be shown or hidden with the shortcuts defined
in **Editor Settings > Shortcuts**, under the **Bottom Panels** category
(**Editor > Editor Settings...** opens the Editor Settings).

Not established: the left-to-right order of the panel buttons, and which panels are visible at
all times rather than only while a matching node or resource is selected. Do not tell a learner
that a panel's button is always there. The Reopen column gives only what the docs state for
that panel.

| Area | What it is for | Default location | Reopen it if closed | Versions |
|---|---|---|---|---|
| **Output** | Shows text printed by the project, and also by the editor | Bottom panel, folded | The docs: printed text appears in "the Output bottom panel that expands" | 4.3-4.7 |
| **Debugger** | Holds the tabs **Stack Trace**, **Errors**, **Profiler**, **Visual Profiler**, **Video RAM** and **Misc** (the docs also describe "Network Profiler" and "Monitors" tabs) | Bottom panel, folded | Click **Debugger** at the bottom of the screen | 4.3 |
| **Debugger** | Same tabs as above, plus **Evaluator** | Bottom panel, folded | Click **Debugger** at the bottom of the screen | 4.4+ |
| **Audio** | — | Bottom panel, folded | — | 4.3-4.7 |
| **Animation** | The animation editor for an AnimationPlayer node | Bottom panel, folded | Click the AnimationPlayer node | 4.3-4.7 |
| **AnimationTree** | — | Bottom panel, folded | — | 4.3-4.7 |
| **Shader Editor** | — | Bottom panel, folded | — | 4.3-4.7 |
| **ShaderFile** | — | Bottom panel, folded | — | 4.3-4.7 |
| **SpriteFrames** | Where the animations and frames of a SpriteFrames resource are edited | Bottom panel, folded | Click the SpriteFrames resource; the panel appears at the bottom of the editor window | 4.3-4.7 |
| **Theme** | The theme editor | Bottom panel, folded | It activates automatically when a Theme resource is selected for editing | 4.3-4.7 |
| **TileSet** | Where a tilesheet image is dragged in to create the tiles of a TileSet | Bottom panel, folded | Open the **TileSet** panel at the bottom of the editor | 4.3-4.7 |
| **TileMap** | Where tiles are picked for painting onto a TileMapLayer node | Bottom panel, folded | Select the TileMapLayer node, then open the **TileMap** panel at the bottom of the editor | 4.3-4.7 |
| **Search Results** | — | Bottom panel, folded | — | 4.3-4.7 |
| **Version Control** | — | Bottom panel, folded | — | 4.3-4.7 |
| **Polygon** | Does not exist | — | — | 4.3 |
| **Polygon** | — | Bottom panel, folded | — | 4.4+ |
| **ResourcePreloader** | Does not exist | — | — | 4.3-4.4 |
| **ResourcePreloader** | — | Bottom panel, folded | — | 4.5+ |
| **MeshLibrary** | Does not exist | — | — | 4.3-4.6 |
| **MeshLibrary** | — | Bottom panel, folded | — | 4.7 |

## Project Settings tabs

Open the window with **Project > Project Settings...**; it is titled
**Project Settings (project.godot)**. Its top-level tabs, in order, are **General**,
**Input Map**, **Localization**, **Globals**, **Plugins**, **Import Defaults** on 4.3-4.6, and
**General**, **Input Map**, **Localization**, **Globals**, **Plugins**, **GDExtension**,
**Import Defaults** on 4.7.

In this table "Reopen it if closed" is how to get back to the tab.

| Area | What it is for | Default location | Reopen it if closed | Versions |
|---|---|---|---|---|
| **General** | The project's settings, grouped in a left column (for example **Display > Window**). Has a **Filter Settings** search field and an **Advanced Settings** toggle | First tab | **Project > Project Settings...** | 4.3-4.7 |
| **Input Map** (some docs pages write "InputMap") | Where input actions are created and assigned input events | Second tab | **Project > Project Settings... > Input Map** | 4.3-4.7 |
| **Localization** | Translations for the project; holds three sub-tabs | Third tab | **Project > Project Settings... > Localization** | 4.3-4.7 |
| **Localization > Translations** | Add or remove translations project-wide, with the **Add...** button | First sub-tab of **Localization** | **Project > Project Settings... > Localization > Translations** | 4.3-4.7 |
| **Localization > Remaps** | Select a resource to be remapped, then add alternatives for each locale | Second sub-tab of **Localization** | **Project > Project Settings... > Localization > Remaps** | 4.3-4.7 |
| **Localization > POT Generation** | — | Third sub-tab of **Localization** | **Project > Project Settings... > Localization > POT Generation** | 4.3-4.5 |
| **Localization > Template Generation** | — (the same third sub-tab under a new label) | Third sub-tab of **Localization** | **Project > Project Settings... > Localization > Template Generation** | 4.6+ |
| **Globals** | Holds three sub-tabs: **Autoload**, **Shader Globals**, **Groups** | Fourth tab | **Project > Project Settings... > Globals** | 4.3-4.7 |
| **Globals > Autoload** | Where a scene or script is set to autoload | First sub-tab of **Globals** | **Project > Project Settings... > Globals > Autoload** | 4.3-4.7 |
| **Globals > Shader Globals** | — | Second sub-tab of **Globals** | **Project > Project Settings... > Globals > Shader Globals** | 4.3-4.7 |
| **Globals > Groups** | Where global groups are managed | Third sub-tab of **Globals** | **Project > Project Settings... > Globals > Groups** | 4.3-4.7 |
| **Plugins** | Lists installed editor plugins under the heading **Installed Plugins:**; tick the checkbox in the **Enabled** column (the docs call it the "Enable" checkbox) to enable one | Fifth tab | **Project > Project Settings... > Plugins** | 4.3-4.7 |
| **GDExtension** | Does not exist | — | — | 4.3-4.6 |
| **GDExtension** | — | Sixth tab, between **Plugins** and **Import Defaults** | **Project > Project Settings... > GDExtension** | 4.7 |
| **Import Defaults** | Project-wide default import settings | Sixth tab, the last one | **Project > Project Settings... > Import Defaults** | 4.3-4.6 |
| **Import Defaults** | Same as above | Seventh tab, the last one | **Project > Project Settings... > Import Defaults** | 4.7 |

## Top menus

The main menu is on the left of the editor's top edge. Its menus, left to right, are **Scene**,
**Project**, **Debug**, **Editor**, **Help**. The items listed are the ones the research
recorded, not each menu's full contents, and except for **Debug** their order within the menu
was not recorded.

| Area | What it is for | Default location | Reopen it if closed | Versions |
|---|---|---|---|---|
| **Scene** | **New Scene**, **Save Scene**, **Save Scene As...**, **Open Scene...**, **New Inherited Scene...** | Top-left, first menu | — | 4.3-4.7 |
| **Project** | **Project Settings...**, **Export...**, **Install Android Build Template...**, **Open User Data Folder**, a **Tools** submenu, and **Quit to Project List** (Ctrl + Shift + Q; Ctrl + Option + Cmd + Q on macOS), which opens the Project Manager | Top-left, second menu | — | 4.3 |
| **Project** | Same items as above, plus **Pack Project as ZIP...** | Top-left, second menu | — | 4.4+ |
| **Debug** | In order: **Deploy with Remote Debug**, **Small Deploy with Network Filesystem**, **Visible Collision Shapes**, **Visible Paths**, **Visible Navigation**, **Visible Avoidance**, **Debug CanvasItem Redraws**, **Synchronize Scene Changes**, **Synchronize Script Changes**, **Keep Debug Server Open**, **Customize Run Instances...** | Top-left, third menu | — | 4.3-4.7 |
| **Editor** | **Editor Settings...** (on macOS with the global menu it is in the application menu instead), **Manage Export Templates...**, the **Editor Docks** submenu, and the **Editor Layout** submenu with **Save Layout...**, **Delete Layout...** and **Default** (the docs call the submenu "Editor Layouts" and its items "Save" and "Delete") | Top-left, fourth menu | — | 4.3-4.7 |
| **Help** | **Search Help...** opens the built-in help. So does pressing F1 anywhere in the editor (Opt + Space on macOS; Fn + F1 on laptops with an Fn key) | Top-left, fifth menu | — | 4.3-4.7 |

**Default** in the **Editor Layout** submenu is a hardcoded editor layout that cannot be removed.

## Version notes

Each note says what a learner sees on which version. Where the Godot docs lag the editor, the
editor's own label is the one given first.

**Main screens and Project Manager**

- **Game** main screen: absent on 4.3, which has four main screens (**2D**, **3D**, **Script**,
  **AssetLib**); present on 4.4+, which has five.
- **AssetLib** became **Asset Store**: the main screen button reads **AssetLib** on 4.3-4.6 and
  **Asset Store** on 4.7. The Project Manager's second tab reads **Asset Library** on 4.3-4.6
  and **Asset Store** on 4.7. The 4.7 docs still say "AssetLib" and "Asset Library", so a
  learner on 4.7 following the docs will not find a button with that name.
- Game embedding: the 4.7 docs add a game embedding page and a note about a **Stretch to Fit**
  scaling option. The embedding controls themselves were not researched; do not describe them.
- The Movie Maker Mode toggle in the top-right, the "Project" menu being in the upper left
  corner, and the description of the Output panel are sentences the docs gained on their 4.4
  branch. Whether anything changed in the editor at 4.4 was not checked.

**Docks**

- **Node** dock split: 4.3-4.5 have one **Node** dock on the right side, the tab after
  **Inspector**, with **Signals** and **Groups** buttons inside it. 4.6+ have no **Node** dock;
  **Signals** and **Groups** are separate docks in the same right-side slot.
- **History** dock: right side, third tab after **Inspector** and **Node**, on 4.3-4.5; left
  side, lower slot, next to **FileSystem**, on 4.6+.

**Bottom panels**

- **Polygon** exists on 4.4+, **ResourcePreloader** on 4.5+, **MeshLibrary** on 4.7 only.
- On 4.6+ the editor registers the bottom panels as docks whose default slot is the bottom.
  How that looks by default on 4.7, which defines two bottom slots, was not established.
- **Debugger** panel: the first tab is **Stack Trace** on every version (the 4.3 docs headed
  that section "Debugger"). The **Evaluator** tab exists on 4.4+. **Step Out** joins the
  debugger controls on 4.6+. The profiler's **Autostart** checkbox exists on 4.4+.
- **Animation** panel: **Insert Marker...** exists on 4.4+. The play-from-start button's tooltip
  reads "Play selected animation from start. (Shift+D)" on 4.3; on 4.4+ the button's shortcut
  name is **Play Animation from Start**.
- **SpriteFrames** panel: the icon buttons whose tooltips read **Add frames from sprite sheet**
  and **Add frame from file** on 4.3-4.5 have tooltips reading **Add Frames from Sprite Sheet**
  and **Add Frame from File** on 4.6+. These are tooltips on icon-only buttons, not visible
  captions.
- **TileMap** panel: the tool buttons are icon buttons. Their tooltips read **Selection**,
  **Paint**, **Line**, **Rect**, **Bucket**, **Picker**, **Eraser** on 4.3 and
  **Selection Tool**, **Paint Tool**, **Line Tool**, **Rect Tool**, **Bucket Tool**,
  **Picker Tool**, **Eraser Tool** on 4.4+.

**Project Settings**

- **GDExtension** tab: added between **Plugins** and **Import Defaults** on 4.7; absent on
  4.3-4.6.
- **Globals > Autoload** is in the same place on every version, 4.3-4.7.
- Autoload add form: on 4.3-4.6 it has the fields **Path:** and **Node Name:** and an **Add**
  button. On 4.7 it has three buttons, **Select Script/Scene**, **Create Script** and
  **Create Scene**, with no **Path:** or **Node Name:** fields and no **Add** button; picking a
  file adds it immediately, named after the file. The 4.7 docs still say "Press Add".
- **Localization** third sub-tab: **POT Generation** on 4.3-4.5, **Template Generation** on
  4.6+.
- **Localization > Translations** exists on every version. Only the docs changed: they wrote
  "Project Settings > Localization" until 4.5 and name the **Translations** sub-tab from 4.6.
- **Input Map** filter: a **Filter by Name** field with a **Clear All** button on 4.3-4.4. Those
  labels are gone on 4.5+; whether and how the filter is labelled there was not recorded.
- Physics layer names: the 4.3 docs give the path as "Project Settings > Layer Names"; the docs
  from 4.4 give "Project Settings > Layer Names > 2D Physics". This is a change in the docs'
  wording only.

**Dialogs and the Inspector**

- Node picker: titled **Create New Node** on every version. The 4.3 and 4.4 docs call it "the
  Create Node dialog".
- Create New Group dialog: the confirm button is labelled **Create** on 4.7. On 4.3-4.6 the
  docs say "press Ok"; the button's literal text on those versions was not read from the
  editor.
- Signal connection window: the docs place the **Advanced** button at the window's bottom-right
  on 4.3-4.6 and at its bottom-left on 4.7.
- Inspector resource dropdown: on 4.3-4.4 it has one entry per allowed type reading
  **New** followed by the type name (for example "New SpriteFrames", "New Theme"). On 4.5+ it
  has a **New** header followed by entries reading just the type name (for example
  **SpriteFrames**, **Theme**). The docs keep the older wording on every branch.

**Export**

- Export preset tabs: no patch tab on 4.3; a **Patches** tab on 4.4-4.5; the same tab is named
  **Patching** on 4.6+.
- Export Template Manager (**Editor > Manage Export Templates...**): the buttons
  **Download and Install** and **Install from File** on 4.3-4.6; on 4.7, per-platform
  checkboxes with the buttons **Install Selected Templates** and **Install All Templates**.
