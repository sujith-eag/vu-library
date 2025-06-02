
# Neovim / Vim Essentials


Neovim (Nvim) is a highly configurable, modal text editor built for efficiency.

### Core Concepts: Modes

Nvim operates in several modes. The most common are:

1.  **Normal Mode (or Command Mode):** The default mode. Keystrokes are interpreted as commands (e.g., for navigation, deletion, copying, pasting). You'll spend most of your time here navigating and manipulating text.
    *   Press `<Esc>` from any other mode to return to Normal mode.

2.  **Insert Mode:** Used for typing text like in a regular editor. Characters you type are inserted into the buffer.
    *   Enter from Normal mode with commands like `i`, `a`, `o` (see below).

3.  **Replace Mode:** Similar to Insert mode, but typed characters overwrite existing characters at the cursor position.
    *   Enter from Normal mode with `R` (replace multiple characters) or `r` (replace a single character).

4.  **Visual Mode:** Used for selecting text. Once text is selected, you can operate on it (e.g., delete, copy, change case).
    *   `v`: Character-wise visual mode.
    *   `V`: Line-wise visual mode.
    *   `<C-v>` (Ctrl+v): Block-wise visual mode.

5.  **Command-Line Mode (or Ex Mode):** Used for executing more complex commands, file operations, searching, and substitutions.
    *   Enter from Normal mode by typing `:` (colon), `/` (forward search), or `?` (backward search).

---

### I. Entering & Exiting Modes

*   `<Esc>`: Exit current mode (Insert, Visual, Replace, Command-Line prompt) and return to **Normal Mode**.
*   `i`: Enter **Insert Mode** *before* the cursor.
*   `I`: Enter **Insert Mode** at the *beginning* of the current line.
*   `a`: Enter **Insert Mode** *after* the cursor.
*   `A`: Enter **Insert Mode** at the *end* of the current line.
*   `o`: Open a new line *below* the current line and enter **Insert Mode**.
*   `O`: Open a new line *above* the current line and enter **Insert Mode**.
*   `gi`: Go to the position of the last edit and enter **Insert Mode**.
*   `r{char}`: Enter **Replace Mode** for a *single character*, then return to Normal Mode. (e.g., `rx` replaces the character under cursor with 'x').
*   `R`: Enter **Replace Mode** continuously until `<Esc>` is pressed.
*   `v`: Enter character-wise **Visual Mode**.
*   `V`: Enter line-wise **Visual Mode**.
*   `<C-v>` (Ctrl+v): Enter block-wise **Visual Mode**.
*   `<C-o>`: (In Insert Mode) Execute one Normal mode command and return to Insert mode.

---

### II. Cursor Movement (Normal Mode)

*(Can often be prefixed with a `[count]` to repeat, e.g., `10j` moves 10 lines down)*

**Basic Movement:**
*   `h`: Move cursor left.
*   `j`: Move cursor down.
*   `k`: Move cursor up.
*   `l`: Move cursor right.

**Word Movement:**
*   `w`: Move to the start of the *next* word.
*   `W`: Move to the start of the *next* WORD (words separated by whitespace).
*   `b`: Move to the start of the *previous* word.
*   `B`: Move to the start of the *previous* WORD.
*   `e`: Move to the *end* of the current/next word.
*   `E`: Move to the *end* of the current/next WORD.
*   `ge`: Move to the end of the *previous* word.

**Line Movement:**
*   `0` (zero): Move to the *beginning* of the current line (first column).
*   `^`: Move to the *first non-blank character* of the current line.
*   `$`: Move to the *end* of the current line.
*   `g_`: Move to the last non-blank character of the current line.

**Screen Movement:**
*   `H`: Move to the *High* (top) line of the screen.
*   `M`: Move to the *Middle* line of the screen.
*   `L`: Move to the *Low* (bottom) line of the screen.
*   `<C-u>` (Ctrl+u): Move *up* half a screen (Up).
*   `<C-d>` (Ctrl+d): Move *down* half a screen (Down).
*   `<C-b>` (Ctrl+b): Move *up* one full screen (Back).
*   `<C-f>` (Ctrl+f): Move *down* one full screen (Forward).
*   `zt`: Scroll screen to make current line appear at the *top*.
*   `zz`: Scroll screen to make current line appear in the *middle*.
*   `zb`: Scroll screen to make current line appear at the *bottom*.

**File Movement / Jumping:**
*   `G`: Go to the *last line* of the file.
*   `gg`: Go to the *first line* of the file.
*   `[N]G`: Go to line number `N` (e.g., `40G` goes to line 40).
*   `%`: Jump to the matching bracket `()`, brace `{}`, or square bracket `[]`. Also used with `if/else/endif` etc. in some filetypes.
*   `Ctrl+G`: Display current file name, line number, and position.

**Character Search (on current line):**
*   `f{char}`: Find next occurrence of `{char}` *forwards* on the current line.
*   `F{char}`: Find next occurrence of `{char}` *backwards* on the current line.
*   `t{char}`: Move cursor *to just before* the next occurrence of `{char}` *forwards*.
*   `T{char}`: Move cursor *to just after* the next occurrence of `{char}` *backwards*.
*   `;`: Repeat the last `f`, `F`, `t`, or `T` command.
*   `,`: Repeat the last `f`, `F`, `t`, or `T` command in the opposite direction.

---

### III. Editing Text (Normal Mode)

*(Many editing commands follow the structure `operator{motion}` or `operator[count]{motion}`)*

**Deleting (Cutting) Text:**
*   `x`: Delete character under the cursor (like `dl`).
*   `X`: Delete character *before* the cursor (like `dh`).
*   `d{motion}`: Delete text over `{motion}`.
    *   `dw`: Delete from cursor to the start of the next word.
    *   `db`: Delete from cursor to the start of the previous word.
    *   `d$`: Delete from cursor to the end of the line (same as `D`).
    *   `d0`: Delete from cursor to the beginning of the line.
    *   `d^`: Delete from cursor to first non-blank character of line.
    *   `diw`: Delete *inner word* (word under cursor, excluding surrounding spaces).
    *   `daw`: Delete *a word* (word under cursor, including one surrounding space).
    *   `di(`, `di{`, `di[`: Delete inside parentheses/braces/brackets.
    *   `da(`, `da{`, `da[`: Delete around parentheses/braces/brackets (includes them).
*   `dd`: Delete (cut) the current line.
*   `D`: Delete from cursor to the end of the line (same as `d$`).
*   `[N]dd`: Delete `N` lines starting from the current line.

**Changing Text (Delete then Insert):**
*   `c{motion}`: Change text over `{motion}` (deletes and enters Insert Mode).
    *   `cw`: Change from cursor to the start of the next word.
    *   `caw`: Change a word.
    *   `ciw`: Change inner word.
    *   `c$`: Change from cursor to the end of the line (same as `C`).
    *   `cc`: Change (replace) the entire current line.
    *   `ci(`, `ci{`, `ci[`: Change inside parentheses/braces/brackets.
*   `C`: Change from cursor to the end of the line (same as `c$`).
*   `s`: Substitute character under cursor and enter Insert mode (like `cl`).
*   `S`: Substitute (delete and enter Insert mode) the entire current line (like `cc`).

**Yanking (Copying) Text:**
*   `y{motion}`: Yank (copy) text over `{motion}`.
    *   `yw`: Yank from cursor to the start of the next word.
    *   `y$`: Yank from cursor to the end of the line.
    *   `yiw`: Yank inner word.
*   `yy` or `Y`: Yank (copy) the current line.
*   `[N]yy`: Yank `N` lines starting from the current line.

**Pasting Text:**
*   `p`: Paste (put) the yanked/deleted text *after* the cursor (if character-wise) or on the line *below* (if line-wise).
*   `P`: Paste (put) the yanked/deleted text *before* the cursor or on the line *above*.
*   `gp`, `gP`: Like `p` and `P`, but leave cursor after the pasted text.

**Registers (Buffers for Cut/Copy/Paste):**
*   Text deleted or yanked is stored in registers.
*   `""`: The unnamed register (default for `d`, `c`, `y`, `p`).
*   `"0`: The yank register (last yanked text).
*   `"1` - `"9`: Numbered registers (last 9 deletes, `1` is newest).
*   `"a` - `"z`: Named registers. To use: `"{register}{command}` (e.g., `"ayy` yanks current line into register `a`; `"ap` pastes from register `a`).
*   `"_`: The black hole register (deletes text without saving it).
*   `"+`: System clipboard register (use `"+y` to copy to system clipboard, `"+p` to paste from it).
*   `"*`: X11 primary selection register (often used for middle-click paste on Linux).

**Undo and Redo:**
*   `u`: Undo the last change.
*   `U`: Undo all changes on the current line (since the cursor last moved to it).
*   `<C-r>` (Ctrl+r): Redo the last undone change.
*   `:earlier [N]s/m/h/d`: Go back to text state `N` seconds/minutes/hours/days ago.
*   `:later [N]s/m/h/d`: Go forward.
*   (Nvim specific) Persistent Undo: Nvim saves undo history even after closing files.

**Joining Lines:**
*   `J`: Join the current line with the next line (removes indentation and adds a space).
*   `gJ`: Join lines without adding a space.
*   `[N]J`: Join `N` lines starting from the current line.

**Transposing & Case:**
*   `xp`: Transpose character under cursor with the next one.
*   `~`: Toggle case of character under cursor and move right.
*   `gU{motion}`: Convert text covered by `{motion}` to UPPERCASE. (e.g., `gUw` for a word, `gUU` for a line).
*   `gu{motion}`: Convert text to lowercase. (e.g., `guw`, `guu`).
*   `g~{motion}`: Toggle case of text. (e.g., `g~w`, `g~~`).

**Indentation:**
*   `>>`: Indent current line by `shiftwidth`.
*   `<<`: Unindent current line by `shiftwidth`.
*   `[N]>>`: Indent `N` lines.
*   `==`: Auto-indent current line (requires proper filetype settings).
*   `={motion}`: Auto-indent text covered by `{motion}`.

**Increment/Decrement Numbers:**
*   `<C-a>` (Ctrl+a): Increment number under/after cursor.
*   `<C-x>` (Ctrl+x): Decrement number under/after cursor.

---

### IV. File & Buffer Management (Command-Line Mode)

*(Commands typically start with `:` in Normal Mode)*

**Saving & Quitting:**
*   `:w`: Write (save) the current file.
*   `:w [filename]`: Write to `filename` (Save As).
*   `:q`: Quit (close current window/buffer). Fails if there are unsaved changes.
*   `:wq` or `:x`: Write (save) and quit.
*   `:q!`: Quit *without* saving (discard changes).
*   `:wa`: Write all changed buffers.
*   `:qa`: Quit all (close all windows). Fails if any buffer has unsaved changes.
*   `:wqa` or `:xa`: Write all changed buffers and quit all.
*   `:qa!`: Quit all *without* saving any changes.

**Opening & Editing Files:**
*   `:e [filename]`: Edit `filename`. Opens in current window.
*   `:e!`: Revert to the last saved version of the current file (discard unsaved changes).
*   `:r [filename]`: Read `filename` and insert its content *below* the current line.
*   `:r !{cmd}`: Read output of external command `{cmd}` and insert below current line.
*   `:new [filename]`: Open `filename` in a new horizontal split.
*   `:vnew [filename]`: Open `filename` in a new vertical split.

**Buffer Management:**
*   `:ls` or `:buffers`: List all open buffers.
*   `:b [N/name]`: Switch to buffer number `N` or buffer with partial `name`. (e.g., `:b 3`, `:b index`).
*   `:bn`: Go to the *next* buffer in the list.
*   `:bp`: Go to the *previous* buffer in the list.
*   `:bd [N/name]`: Delete (close) buffer `N` or buffer with `name`. Fails if unsaved.
*   `:bd! [N/name]`: Delete buffer forcefully.

**Window (Split) Management:**
*   `:sp [filename]` or `<C-w>s`: Split current window horizontally (open `filename` or duplicate current).
*   `:vsp [filename]` or `<C-w>v`: Split current window vertically.
*   `<C-w>q` or `<C-w>c`: Close current window split.
*   `<C-w>o`: Close all *other* window splits (make current window the only one).
*   `<C-w>h/j/k/l`: Move cursor to window left/down/up/right.
*   `<C-w>w`: Cycle through open windows.
*   `<C-w>H/J/K/L`: Move current window to far left/bottom/top/right.
*   `<C-w>=`: Equalize window sizes.
*   `<C-w>+/-`: Increase/decrease window height.
*   `<C-w></>`: Increase/decrease window width.

**Tab Management:**
*   `:tabnew [filename]`: Open `filename` in a new tab.
*   `:tabe [filename]`: Edit `filename` in a new tab (similar to `:tabnew`).
*   `gt` or `:tabn`: Go to the *next* tab.
*   `gT` or `:tabp`: Go to the *previous* tab.
*   `[N]gt`: Go to tab number `N`.
*   `:tabc`: Close current tab.
*   `:tabo`: Close all *other* tabs.

---

### V. Searching & Replacing

**Searching (Normal Mode initiates, then Command-Line Mode):**
*   `/pattern`: Search *forwards* for `pattern`.
*   `?pattern`: Search *backwards* for `pattern`.
*   `n`: Repeat last search in the *same* direction.
*   `N`: Repeat last search in the *opposite* direction.
*   `*`: Search forwards for the word currently under the cursor (whole word match).
*   `#`: Search backwards for the word currently under the cursor (whole word match).
*   `g*`: Like `*` but finds partial matches.
*   `g#`: Like `#` but finds partial matches.
*   `:set ic` / `:set noic`: Ignore case / respect case in searches.
*   `:set hls` / `:set nohls`: Highlight search matches / no highlight.
*   `:nohlsearch` or `:noh`: Clear current search highlighting temporarily.

**Substitution (Command-Line Mode):**
*   Format: `:[range]s/source_pattern/target_pattern/[flags]`
*   `range`:
    *   `%`: All lines in the file (equivalent to `1,$`).
    *   `.`: Current line.
    *   `N,M`: Lines `N` through `M`.
    *   `'<,'>`: Current visual selection (automatically inserted when in Visual mode and typing `:s`).
*   `source_pattern`: The text/regex to find.
*   `target_pattern`: The text/regex to replace with. If empty, deletes the `source_pattern`.
*   `flags`:
    *   `g` (global): Replace *all* occurrences on each line in range (default is first only).
    *   `c` (confirm): Ask for confirmation before each replacement (`y/n/a/q/l/^E/^Y`).
    *   `i` (ignore case): Case-insensitive for this substitution only.
    *   `I` (case sensitive): Case-sensitive for this substitution only.
*   **Examples:**
    *   `:%s/director/member/g`: Replace all "director" with "member" in the entire file.
    *   `:s/old/new/`: Replace first "old" with "new" on the current line.
    *   `:1,50s/unsigned//g`: Delete all "unsigned" in lines 1 to 50.
    *   `:'<,'>s/foo/bar/gc`: Replace "foo" with "bar" in the visual selection, confirming each.

---

### VI. Other Useful Commands & Features

**Repeating Commands:**
*   `.` (dot): Repeat the *last change* (e.g., last delete, paste, insert + text). Extremely powerful.

**Macros:**
*   `q{register}`: Start recording keystrokes into `{register}` (e.g., `qa`).
*   `q`: Stop recording (when already recording).
*   `@{register}`: Execute the macro stored in `{register}` (e.g., `@a`).
*   `@@`: Repeat the last executed macro.
*   `[N]@{register}`: Execute macro `N` times.

**Marks:**
*   `m{char}`: Set mark `{char}` (a-z lowercase for current file, A-Z uppercase for global) at cursor position.
*   ``{char}` (backtick): Jump to the exact position (line and column) of mark `{char}`.
*   `'{char}` (single quote): Jump to the beginning of the line of mark `{char}`.
*   ```` or `''`: Jump to the position before the last jump.

**Visual Mode Operations:**
*   After selecting text with `v`, `V`, or `<C-v>`:
    *   `d` or `x`: Delete selected text.
    *   `y`: Yank selected text.
    *   `c`: Change selected text.
    *   `U`: Convert selected text to UPPERCASE.
    *   `u`: Convert selected text to lowercase.
    *   `~`: Toggle case of selected text.
    *   `>`: Indent selected text.
    *   `<`: Unindent selected text.
    *   `J`: Join selected lines.
    *   `:command`: Execute Ex command on selected lines (range `'<,'>` is auto-inserted).

**Text Objects:**
*   Used with operators like `d`, `c`, `y`, `v`.
*   `iw`: Inner word (e.g., `diw` deletes the word under cursor).
*   `aw`: A word (includes one surrounding space).
*   `i(`, `i)`, `ib`: Inner block of `()`.
*   `a(`, `a)`, `ab`: A block of `()` (includes the parentheses).
*   `i{`, `i}`, `iB`: Inner block of `{}`.
*   `a{`, `a}`, `aB`: A block of `{}`.
*   `i[`, `i]`: Inner block of `[]`.
*   `a[`, `a]`: A block of `[]`.
*   `i<`, `i>`: Inner block of `<>`.
*   `a<`, `a>`: A block of `<>`.
*   `i"` `i'` `` i` ``: Inner quotes/backticks.
*   `a"` `a'` `` a` ``: Around quotes/backticks.
*   `it`: Inner XML/HTML tag.
*   `at`: Around XML/HTML tag.
*   `ip`: Inner paragraph.
*   `ap`: Around paragraph.

**Executing External Commands:**
*   `:!{command}`: Execute shell command `{command}` (e.g., `:!ls -l`).
*   `:[range]!{filter_cmd}`: Filter lines in `range` through external `filter_cmd`.

**Completion (Insert Mode):**
*   `<C-n>`: Next completion.
*   `<C-p>`: Previous completion.
*   `<C-x><C-f>`: File name completion.
*   `<C-x><C-l>`: Whole line completion.
*   `<C-x><C-o>`: Omni-completion (language-specific, requires configuration/plugins).

---

### VII. Help System & Configuration

**Getting Help:**
*   `:help`: Open general help window.
*   `:help {subject}`: Get help on a specific `{subject}` (e.g., `:help x`, `:help i_CTRL-O`, `:help :quit`).
*   `:help {word}<Ctrl-d>`: List all help tags matching `{word}`.
*   `:help quickref`: Excellent quick reference sheet.
*   While in a help buffer:
    *   `<C-]>` (Ctrl + Right Square Bracket) or double-click: Jump to tag under cursor.
    *   `<C-t>` or `<C-o>`: Jump back to previous position/tag.
*   `K` (Shift+k) in Normal Mode: Look up keyword under cursor (often man page or language keyword).

**Tutorial:**
*   `:Tutor`: Start the built-in interactive Nvim tutorial (highly recommended for beginners).

**Built-in Terminal:**
*   `:terminal` or `:term`: Open a terminal session inside Nvim.
*   Use `<C-\><C-n>` to go from terminal job mode to terminal normal mode.
*   From terminal normal mode, use `i` to re-enter job mode, or other Nvim commands.

**Configuration:**
*   Neovim's main configuration file is typically `~/.config/nvim/init.vim` (for Vimscript) or `~/.config/nvim/init.lua` (for Lua, increasingly common).
*   Older Vim users might have `~/.vimrc`.
*   This is where you customize settings (`:set option=value`), define key mappings (`:map ...`), and load plugins.


