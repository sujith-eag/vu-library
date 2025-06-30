
# Git: Basic Setup


## Basic Setup After Installing Git

Check Git Version
```bash
git --version
```

Sets 'main' as the default branch name for new repositories created with 'git init'.
```bash
git config --global init.defaultBranch main
```

Configure User Information that gets embedded into commits. Use the same name and email you use for services.
```bash
git config --global user.name "Your Full Name"
# Verify the username was set
git config --get user.name

git config --global user.email "youremail@example.com"
# Verify the email was set
git config --get user.email
```

Enable Colored Output (Highly Recommended)
```bash
git config --global color.ui auto
```

Configure Pull Behavior (Merge vs. Rebase)
```bash
git config --global pull.rebase false
```

for rebase by default on pull (more advanced)
```bash
git config --global pull.rebase true
```


## Basic Git Commands: The Core Workflow

These are the commands you'll use most frequently.

```bash
# Check Repository Status
git status
```

- Tracked: Files Git knows about.
- Untracked: New files Git doesn't yet know about.
- Modified: Tracked files that have changes.
- Staged: Files whose current versions are marked to be included in the next commit.

### Stage Changes (Adding to the Staging Area/Index)

```bash
# Stage a specific file
git add <file_name.txt>

# Stage multiple specific files
git add <file1.txt> <file2.js>

# Stage all changes
git add .
# git add -A
# git add --all
```

The staging area is an intermediate step before committing. It allows to select which changes go into the next commit.

Commit Changes
```bash
git commit -m "Your concise and descriptive commit message"
```
If you omit -m, Git will open your configured text editor.

### View Commit History

Press 'q' to exit the log view if it's paginated
```bash
git log

git log --oneline   
# Shows a compact, one-line summary of each commit
```

```bash
git log --graph          
# Shows an ASCII graph of branch and merge history

git log --pretty=format:"%h - %an, %ar : %s" 
# Custom format
```

### Pushing to Remote Repository

If remote repository is setup, Push the current local branch to its corresponding upstream (remote) branch.
```bash
git push
```

Explicitly push the local 'main' branch to the 'main' branch on the remote named 'origin'.
```bash
git push origin main
```

To Push all Local Branches to origin
```bash
git push --all origin
```

To remove the ranches that have been deleted locally, to keep Remote in sync.
```bash
git push --all origin
git push --prune origin
```

## Ignoring Files and Directories (`.gitignore`)

The `.gitignore` file tells Git which files or directories it should ignore. Ignored files won't be tracked and won't show up in `git status` as untracked files, nor will they be added with `git add .`.

*   Create a file named `.gitignore` in the root directory of repository.
*   Add patterns, filenames, or directory names to this file, one per line.

```txt
# Ignore specific files

secret_keys.txt
.env
*.log
*.tmp

# Ignore directories

node_modules/
build/
dist/
.vscode/
public/
```

**Stop Tracking an Already Tracked File/Directory:**

1.  Add the file/directory pattern to your `.gitignore` file.

2.  Remove the file/directory from Git's tracking (but keep it in your local working directory).

*   For a directory:
```bash
git rm -r --cached public/
```

*   For a single file:
```bash
git rm --cached path/to/your/file.txt
```
	
3.  Commit the changes
```bash
git add .gitignore
git commit -m "Stop tracking public/ directory and add to .gitignore"
```


## Working with Branches

Branches allow for working on different features, bug fixes, or experiments in isolation without affecting the main codebase (`main` branch).


List all local branches. The current branch will be marked with an asterisk `*`.
```bash
git branch

# List all local and remote-tracking branches:
git branch -a
```

Creating and Checking out a branch
```bash
# Creates the branch; it doesn't switch to it.
git branch <new_branch_name>

# Switch to an existing branch (checkout).
git checkout <branch_name>

# Create a new branch AND switch to it in one command.
git checkout -b <new_branch_name>
```

### Merging Branches

Merging integrates changes from one branch into another.

Switch to the branch to merge changes INTO (target branch).
```bash
git checkout main

# Merge the desired branch into the current branch.
git merge <branch_name_to_merge_from>
```

If there are no conflicting changes, Git might perform a "fast-forward" merge. If there are divergent changes, Git will create a new "merge commit".

### Handling Merge Conflicts

Merge conflicts occur when Git cannot automatically resolve differences in the same part of a file between the two branches being merged.

*   Happens when modified the same lines in the same file.
*   Git will pause the merge and mark the conflicting sections in the affected file(s) with conflict markers (e.g., `<<<<<<< HEAD`, `=======`, `>>>>>>> branch-name`).

Your task:
1.  Open the conflicted file(s). Manually edit the file to resolve the differences: choose which version to keep, or combine them.
2.  Remove the conflict markers.
3.  Save the file. Stage the resolved file: `git add <conflicted_file_name>`
4.  Once all conflicts are resolved and staged, complete the merge: `git commit` (Git will often pre-fill a commit message for the merge).

If you want to abort the merge: `git merge --abort`

### Deleting a Branch

Once a feature branch has been successfully merged into the main branch and is no longer needed, it can be deleted.

This is a "safe" delete; Git prevents it if the branch has unmerged changes.
```bash
git branch -d <branch_name>
```

Force delete a local branch, even if it has unmerged changes.
```bash
git branch -D <branch_name>
```

Delete a remote branch (on GitHub/origin):
```bash
git push origin --delete <remote_branch_name>
```



## Using Git in VS Code

**Opening VS Code from Terminal:** Navigate to project directory in the terminal. Type `code .` to open the current directory in VS Code.

Setting VS Code as the default editor for commit messages:
```bash
git config --global core.editor "code --wait"
```

## Crafting Good Commit Messages

Clear, concise commit messages are vital for understanding project history and collaborating effectively.

**The Seven Rules of a Great Git Commit Message (by Chris Beams):**

1.  **Separate subject from body with a blank line.**
    
2.  **Limit the subject line to 50 characters.**
	
3.  **Capitalize the subject line.**
    
4.  **Do not end the subject line with a period.**
    
5.  **Use the imperative mood in the subject line.**
    *   Write as if giving a command: The subject line should complete the sentence, "If applied, this commit will..."  "Fix bug," "Add feature," "Update documentation" (not "Fixed bug" or "Adds feature").

6.  **Wrap the body at 72 characters.**
    *   Improves readability in terminals and Git tools.

7.  **Use the body to explain *what* and *why* vs. *how*.**
    *   The code itself shows *how*. The commit message should explain the reasoning behind the change and what it accomplishes, especially for complex changes.



>[!note]
>- **[Pro Git Book](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)**: A comprehensive guide to Git.
