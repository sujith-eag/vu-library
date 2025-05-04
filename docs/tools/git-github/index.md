---
title: "Git & Github"
description: ""
summary: ""
date: 2024-10-22T14:47:02+05:30
lastmod: 2024-10-22T14:47:02+05:30
draft: false
weight: 900
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


## Introduction to Git
- **[Pro Git Book](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)**: A comprehensive guide to Git.

## Basic Setup after Downloading Git

```bash
git --version  # Check Git version

# Change default branch to main
git config --global init.defaultBranch main

git config --global user.name "Your Name"  # Set username
git config --get user.name                   # Retrieve username

git config --global user.email "mail@mail.com"  # Set email
git config --get user.email                   # Retrieve email

git config --global color.ui auto             # Enable colored output

git config --global pull.rebase false         # Disable rebase on pull
```

`git pull`: This command is used to fetch changes from a remote repository and merge them into your current branch. By default, it performs a merge.

Rebasing: This is an alternative to merging where Git re-applies your local changes on top of the changes fetched from the remote.

___

## Basic Git Commands

```bash
git status       # Show tracked, untracked, staged files


git add [file name]       # Add specific file to staging area
git add .                 # Add all files to staging area


git commit -m "message"   # Commit staged files with a message


git log        # Show commit history
q              # Exit log view if it's too long


git push                # Push changes to the remote repository
git push origin main    # Push the main branch to origin in Github
```

### Using Git in VS Code

- Opening VS Code from terminal using: `code .`
- To set VS Code as the default editor for commit messages:
```bash
git config --global core.editor "code --wait"
```

___

## Connecting Git to GitHub with SSH

#### Setting Up SSH Key
```bash
ls ~/.ssh/id_ed25519.pub  # Check if SSH key exists

ssh-keygen -t ed25519     # Create a new SSH key
# Press Enter for default location and no passphrase

cat ~/.ssh/id_ed25519.pub  # Copy the SSH key
```

#### Adding SSH Key to GitHub

1. Go to **Settings** → **SSH and GPG keys**.
2. Click **New SSH key** and paste the SSH key.

____

## Connecting from GitHub to Git

1. **Creating a New Repository**:
   - In GitHub, click **New repository**.
   - Select **Code**, then copy the SSH link (not the HTTP link).

#### Cloning a Repository from Github

```bash
mkdir repos       # Create a new directory
cd repos          # Navigate to that directory

git clone [paste the ssh link]  # Clone the repo from GitHub
cd [the new folder]             # Navigate into the cloned folder
git remote -v                   # Show the linked GitHub repository
```

____

### Pushing Local Repository to GitHub

```bash
git init                  # Initialize a new Git repository

git add .                 # Stage all files

git commit -m "message"   # Commit the changes
```

Create an empty repository on GitHub (without README or license)
```bash
git remote add origin [ssh key]  # Link to the GitHub repository

git branch -M main               # Rename current branch to main (if necessary)

git push -u origin main          # Push changes to GitHub
```

## Commit Messages

- Follow the seven rules of a great Git commit message:
  1. Separate subject from body with a blank line.
  2. Limit subject line to 50 characters.
  3. Capitalize the subject line.
  4. Do not end the subject line with a period.
  5. Use the imperative mood in the subject line.
  6. Wrap the body at 72 characters.
  7. Explain _what_ and _why_ in the body, not _how_.

- **Tutorial Video**: [Conventional Commits](https://www.youtube.com/watch?v=OJqUWvmf4gg)

## Branches

- Use `git branch` to see all branches.
- To create a new branch:
```bash
git branch <branch_name>       # Create a new branch
git checkout <branch_name>     # Switch to the branch


git checkout -b <branch_name>  # Create and switch to a new branch


git checkout main     # Switch back to the main branch
```

#### Merging Branches

Move to the branch you want to merge into
```bash 
git merge <branch_name>  

# Merge changes from <branch_name>
```

#### Merge Conflicts

- Occur when changes to the same line in a file are made in different branches.

#### Deleting a Branch

```bash
git branch -d <branch_name>  
# Delete a merged branch

git branch -D <branch_name>  
# Force delete an unmerged branch
```

#### Pushing a New Branch to GitHub

```bash
git checkout -b <branch_name>    
# Create and switch to the new branch


git push origin <branch_name>     
# Push the branch to GitHub


git push -u origin <branch_name>  
# Link the local branch with the remote one
```

#### Changing to an Old Commit

```bash
git log --oneline        # View commit history
# Get the commit ID from the log

git reset --hard [9digitId]       
# Reset to that commit (deletes progress)

git checkout -b old-state [id]    
# Create a new branch at the old commit

git revert [commit_id]             
# Revert a specific commit
```

---

### Additional Topics to Explore

2. **Git Workflow Models**:
   - Overview of workflows like Git Flow, GitHub Flow, etc.

3. **Remote Management**:
   - How to manage multiple remotes and their configurations.

4. **Stashing Changes**:
   - Using `git stash` to temporarily save changes.

5. **Rebasing**:
   - Introduction to rebasing vs. merging and its implications.

6. **Using Tags**:
   - How to create and manage tags for releases.

7. **Working with Submodules**:
   - Overview of using submodules for managing dependencies.

8. **Collaborative Work**:
   - Best practices for collaborating on GitHub (pull requests, code reviews).

9. **Git Hooks**:
   - Introduction to hooks for automating tasks at different points in the Git workflow.

10. **Git GUI Clients**:
   - Overview of popular GUI clients for Git and their features.

11. **Troubleshooting Common Issues**:
   - Tips for resolving common Git issues (merge conflicts, detached HEAD, etc.).
