---
title: "Bash - 15 - Neovim"
description: ""
summary: ""
date: 2025-01-01T15:29:36+05:30
lastmod: 2025-01-01T15:29:36+05:30
draft: false
weight: 986
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


***Command mode*** : keystrokes act as commands.      
***Insert and Replace mode*** for editing. (`<Esc>` to exit to Command mode)

Insert mode inserts any characters at cursor position.     
Replace mode the characters entered replaces the character at the cursor position.

___

Five categories of keystrokes:
* Mode commands
* Cursor movement commands
* Editing commands
* File commands
* Miscellany

___

#### Mode commands : 
`<Esc>`  to move out of insert / replace mode.      
`I, i, A, a, O, o` to move into insert mode at a particular place.      
`I` at beginning of line `i` at current cursor position.       
`a` immediately after the cursor position, `A` at the end of the line.     
`O` in a blank line immediately above the cursor  `o` immediately below the cursor.       
`R, r` to enter replace mode and staying there or replacing one character and moving out after that to command mode.    

___

#### Cursor Movement Commands:

`hjkl` for moving around.     
`h--l` for left and right.      
`-jk-` for down and up.      
These can be prefixed with numbers to move certain distance. `2k, 10j, 13h`.    

***Moving to Line Extremes :***    
`0` just zero to move to left end (beginning) of the line.      
`$` (shift+4) to move to end of line.     

***Moving Over words :***     
`b` is beginning of current word, `e` is end of current word, `w` is jumping to next words.

`w, b` to move forward or backwards to the next/previous word or punctuation mark. (`3w` to move 3 word).     
`W, B` moves one word      
`E, e` similar but takes to end of current word or to next punctuation mark.      


***Page Motion :***    
`Ctrl + b` and `Ctrl + d` to move up and down by half page.       
`Ctrl + u` and `Ctrl + f` to move up down by one full screen.      

`H, M, L` Head, Middle, Last moves to these points in the file.     

***Absolute movement :***
`Ctrl + G` gives the current line number.
(Capital G)

`nG` can be given to move to a particular line as if needed when it mentioned in an error.     
`40G` moves to the 40th line
`1G` to the first line
`G` moves to the end of the file.

___

#### Editing Commands

Which allows for cut copy an paste.     

***Deleting Text :***    
There are various forms of Cut (deletion) commands.     
`x` deletes the current character.       
`D` deletes from cursor to end of the line.     
`dd` deletes the current line (`5dd` to delete multiple lines below it)      
`dw` to delete current word or from cursor till next word (`d5w` to delete 5 words)    
`db` deletes the previous word or to the left of cursor till end of word.     

***Moving Text :***    
Deleted items are moved into buffer, can be recalled or pasted anywhere.     
`p` to paste/put before the cursor    
`P` to paste/put after the cursor     

***Copying Text:***    
yanking is used to copy the file.    
`yy` to copy the current line and `yw` to copy the current word to buffer.      
`6yy` copies the 6 lines from cursor.      

***Buffer space :*** adding any letter from a to z to command allows to select 26 additional buffers.     
`a6yy` copies 6 lines from the cursor into buffer `a`, then typing `ap` will paste those 6 lines after the cursor.     

***Joining Lines :***   
`J` to join two consecutive lines into one,      
`4J` joins the following four lines with the current one.    


***Undoing Last Editing Instructions :***
`u` undoes the last changes made.     
`u` can be combined with number also so undo multiple steps. `10u`.


`U` undoes all changes made to the current line after the cursor moved to that line.
If the cursor moved to another line then it won't work.

`Ctrl + r` to redo the last command    
`10[Ctrl + r]` also redoes multiple undoes.

`xp` transposes the current character with next character (similar to cut paste)       
 

___

#### File Commands
File commands start with `:`      
`:` will go to command line (when in Command mode)       
`:w` to save the file      
`:w filename` to save as (change file name)      
`:r filename` to open a new file.      
`:q` for closing a window      
`:wq` to save and exit      
`:q!` to discard changes and exit      
`:qa!` Get out of Vim (all changes are lost) exiting from all deeper layers at once.      

___

#### Miscellany

`/string` or `?string` to search for a string      

#### ***Substitution - Search and replace (:s/ /) :***

`:address/source_pattern/target_pattern/flags`

The source pattern will be replaced by the target pattern in all lines specified by the address.    
The address can be 1 or many numbers separated by a comma.    
`1,$` represents all lines in a file, from 1 to the end. `%` can be used instead.    
`:1,$s/director/member/g` or `:%s/director/member/g`    

Leaving out the `g`, the substitution will be carried out for the `first` occurrence in each address line, but not all in the line.

Target pattern is also optional, if left out then all the occurrences will deleted.     
`:1,50s/unsigned//g` will delete unsigned from everywhere in lines 1 to 50.    

`$./director/member/g`  works on the current line.    
`$s/director/member/g`  works on only the last line.    

To Make the substitution interactive, one by one with commands, using `c` as a flag.     
`:1,$s/director/member/gc`     
`y` to confirm and `n` to cancel. `q` to quit.


___

`%` to match the current section closing braces     

`v` to start selection(visual) and moving any direction. (`gU` to Uppercase everything selected)      


____
___
___

`:help`   is general help window       
Help can anything specific can be given as argument to `:help` command.     
`:help x`,  `:help i_<esc>`, `:help :quit`      

`Ctrl+]` (square brace) or `double mouse click` on any `tag` vim will jump to that subject similar to help page. (if there are no help pages for that particular word, does't go anywhere )      

`Ctrl+O`  (its not zero), or `Ctrl + right mouse click` or `Ctrl+T` to jump back to previous position. (repeat to go further back)


___

`:help quit`  or `:help word` and pressing `Ctrl+D` will bring up all matching help entries to see

`:Tutor` for a tutorial on basics

`:help quickref`  for the reference of command shortcuts

`:terminal` for a terminal session inside editor

___________

`:index`  for all the `:` commands

Links are opened by moving on it and pressing enter.
Capital K which is `Shift+K` on any item will search for documentation ( `Ctrl+]` searches for tags of the word) 

Pressing `<Esc>` will put in Command mode (or will cancel the partially typed command), which allows to retype a command.


