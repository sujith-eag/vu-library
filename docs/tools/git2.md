
# GitHub Setup

## Connecting Local Git to GitHub with SSH

SSH (Secure Shell) provides a secure way to interact with remote repositories without needing to enter username and password every time.

### Setting Up an SSH Key Pair

An SSH key pair consists of a private key (kept secret on your computer) and a public key (which you can share with services like GitHub).

```bash
# Check if an SSH key (ED25519 type) already exists.
ls -al ~/.ssh/id_ed25519.pub
```

If it prints "No such file or directory" or similar, you need to create one.
```bash
# Create a new ED25519 SSH key pair
ssh-keygen -t ed25519 -C "your_email@example.com"
```

`-t ed25519`: Specifies the key type.
`-C "your_email@example.com"`: Adds a comment (usually email) to the key, making it easier to identify.


When prompted: "Enter file in which to save the key `(/Users/your_username/.ssh/id_ed25519)`:"

Press Enter to accept the default location. "Enter passphrase (empty for no passphrase):"

```bash
# Display and Copy the Public SSH Key
cat ~/.ssh/id_ed25519.pub
```

### Adding the SSH Public Key to GitHub

1.  Go to your GitHub account, select **Settings**.

2.  In the user settings sidebar, click on **SSH and GPG keys**.

3.  Click the **New SSH key** or **Add SSH key** button.

4.  Give your key a descriptive **Title** (e.g., "My Work Laptop" ).

5.  Paste the copied public key into the **Key** field.

6.  Click **Add SSH key**. You may be asked to confirm your GitHub password.


## Working with Remote Repositories

### Cloning an Existing Repository from GitHub

Cloning creates a local copy of a remote repository on your machine.

```bash
# Create a directory to store your repositories.
mkdir ~/Projects  # Or ~/repos, ~/git
cd ~/Projects
```

Get the Repository URL from GitHub:
  - Go to the GitHub repository page you want to clone.
  - Click the green "Code" button.
  - Make sure "SSH" is selected.
  - Copy the SSH URL ( `git@github.com:YourUsername/RepositoryName.git`).

```bash
# Clone the repository.
git clone <paste_the_ssh_url_here>
```

Verify the remote connection. `-v` (verbose) shows the URLs for fetch and push.
```bash
git remote -v
```
Output should look like:
```bash
origin  git@github.com:YourUsername/MyProject.git (fetch)
origin  git@github.com:YourUsername/MyProject.git (push)
```

## Pushing an Existing Local Repository to GitHub

Local Git repository that has to be connected to a new, empty repository on GitHub:

```bash
# Initialize a Git repository
git init # (if not yet under Git)

# Add all files to the staging area.
git add .

# Commit the changes.
git commit -m "Initial commit"
```

On GitHub, Create a new, *empty* repository on GitHub. Do NOT initialize it with a README, .gitignore, or license

```bash
# Add the remote GitHub repository URL to your local repository.
git remote add origin <paste_the_ssh_url_from_github_here>

# Verify the remote was added.
git remote -v
```

If not done, Rename your local default branch to 'main'
```bash
git branch -M main

# Push your local 'main' branch to the 'origin' remote.
git push -u origin main
```

`-u` (or `--set-upstream`): Sets up tracking, so in the future, just use 'git push' and 'git pull' without specifying 'origin main'.

### Changing a Remote URL:

```bash
git remote set-url origin <NEW_SSH_OR_HTTPS_URL>
```
    
## Navigating and Modifying Commit History

Shows list of commits, each with a short commit hash
```bash
# View commit history concisely.
git log --oneline
```

Reset to a Previous Commit (Potentially Destructive)
```bash
git reset --hard 
# discards all changes in the working directory 
# and staging area that came after that commit.
```

```bash
git reset --hard <commit_hash>
# git reset --hard a1b2c3d
```

This creates a new branch starting at the specified old commit, allowing for inspection.
```bash
# Create a New Branch from an Old Commit (Safe Way to Revisit)
git checkout -b <new_branch_name_for_old_state> <commit_hash>
```

Creates NEW commit that undoes the changes of previous commit.
This is the preferred way to "undo" a commit that has already been pushed and shared
```bash
# Revert a Specific Commit (Safe Way to "Undo" a Shared Commit)
git revert <commit_hash_to_revert>
```

## Forks and Pull Requests

Standard workflow :
1.  **Forking** the repository.
2.  **Cloning** your fork to your local machine.
3.  Creating a **new branch** for your changes.
4.  Making and committing your changes locally.
5.  **Pushing** your changes to your fork.
6.  Creating a **Pull Request (PR)** from your fork to the original (upstream) repository.

### A. Forking a Repository

Forking creates a personal copy of someone else's repository under your own account. 

### B. Cloning Your Fork to Your Local Machine

To get your forked repository onto your local computer to make changes.

```bash
cd ~/Projects  # Or your preferred directory

git clone <url_of_your_fork>
```

### C. Configuring Remotes: Linking to the Original (Upstream) Repository

Cloned fork, by default, has a remote named `origin` that points to *your fork* on GitHub. To keep your fork updated with changes from the original project and to make pull requests, you need to add another remote that points to the original (upstream) repository.

```bash
git remote add upstream <url_of_original_repository>

git remote -v
# Output should now include 'upstream':
# origin    git@github.com:YourUsername/RepositoryName.git (fetch)
# origin    git@github.com:YourUsername/RepositoryName.git (push)
# upstream  git@github.com:OriginalOwner/RepositoryName.git (fetch)
# upstream  git@github.com:OriginalOwner/RepositoryName.git (push)
```

### D. Keeping Fork Synced with the Upstream Repository

Before starting new work, it's good practice to sync fork's `main` branch (or other relevant branches) with the latest changes from the upstream repository.

```bash
git checkout main

# Fetch the latest changes from the upstream repository.
git fetch upstream
# This downloads the changes but doesn't integrate them yet.

# Merge changes from upstream/main into your local main branch.
git merge upstream/main

# keeping your fork's main branch on GitHub in sync.
git push origin main
```

### E. Creating a New Branch for Your Changes

It's crucial to make your changes on a new feature branch, not directly on `main`. This keeps `main` clean and makes it easier to manage multiple contributions.

```bash
# Create and switch to a new descriptive branch
git checkout -b <your_feature_branch_name>

# Example: git checkout -b feature/add-user-authentication
# Example: git checkout -b bugfix/fix-login-error
```

### F. Making and Committing Your Changes

```bash

git add . # To stage all changes

git commit -m "feat: Implement user signup functionality"
```

### G. Pushing Your Branch to Your Fork on GitHub

Once you've made your commits on the feature branch, push this branch to *your fork* (the `origin` remote).

```bash
git push origin <your_feature_branch_name>
# Example: git push origin feature/add-user-authentication

# For the first push of a new branch
git push -u origin <your_feature_branch_name>
```

### H. Creating a Pull Request (PR)

Now that your changes are on your fork on GitHub, you can create a Pull Request to propose merging your changes into the original (upstream) repository.

1.  **Go to Fork on GitHub:** Navigate to your forked repository (e.g., `https://github.com/YourUsername/RepositoryName`).

2.  **GitHub often detects recent pushes:** You might see a banner prompting you to "Compare & pull request" for your recently pushed branch. Click this button if it appears.

3.  **Alternatively, initiate manually:**
    *   Go to the "Pull requests" tab in your forked repository.
    *   Click the "New pull request" button.

4.  **Set the Base and Compare Branches:**
    *   **Base repository:** This should be the *original upstream repository* (e.g., `OriginalOwner/RepositoryName`).
    *   **Base branch:** This is the branch in the upstream repository you want your changes merged *into* (usually `main`, `master`, or `develop`).
    *   **Head repository:** This should be *your forked repository* (e.g., `YourUsername/RepositoryName`).
    *   **Compare branch:** This is the branch in your fork that contains *your changes* (e.g., `feature/add-user-authentication`).
    GitHub will show you a diff of the changes.

5.  **Write a Clear Pull Request Title and Description:**
    *   **Title:** A concise summary of your changes (often similar to your main commit message).
    *   **Description:**
        *   Explain *what* problem your changes solve or *what* feature they add.
        *   Explain *why* these changes are necessary or beneficial.
        *   Reference any related issues (e.g., "Closes #123" or "Fixes #456").
        *   Describe how to test your changes, if applicable.

6.  **Click "Create pull request."**

This fork-and-PR workflow is fundamental for collaborative software development, especially in open-source communities.

## Understanding `git pull` Strategies:

`git pull` fetches changes from a remote repository and integrates them into local branch. By default, `git pull` uses `git merge`. Setting `pull.rebase` to `false` explicitly confirms this default merge strategy. 

Setting it to `true` would make `git pull` use `git rebase` instead. For beginners, sticking with the default (merge) is often simpler.

**`git pull` (Default: Merge):**
*   This command is a combination of `git fetch` (downloads changes from the remote) and `git merge` (integrates those changes into current local branch).

*   A merge creates a "merge commit" if there are divergent changes, preserving the history of both branches.

**Rebasing (`git pull --rebase` or if `pull.rebase true`):**
*   Rebasing takes local commits, temporarily removes them, pulls the remote changes, and then re-applies your local commits one by one *on top* of the newly fetched remote changes.

*   This results in a cleaner, more linear project history but rewrites your local commit history (which can be problematic if the branch is shared and others have based work on your old commits).

Without `--global` (or using `--local`): Applies the configuration only to the current repository. These settings are stored in the `.git/config` file within that specific repository. Local settings override global settings.
