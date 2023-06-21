- Distributed version control system(VCS)!🤯
- SCM - software configuration management (or) source code management
- Previously - CVCS (Centralised version control system)
- now - DVCS (Distributed version control system)

## Configuration settings

- `git init`: Initialize the Git repository.
- `rm -rf .git`: Remove the Git repository.
- `git status`: Find the status of the working directory.
- `git add .`: Add all files to the staging area.
- `git add <file1> <file2> .... <fileN>`: Add specific files to the staging area.
- `git commit -a -m "message"`: Commit all changes with a message.
- `git ls-files`: Show all files in the staging area.
- `git rm <fileName1> <fileName2>`: Remove files from both the working directory and staging area.
- `git diff --staged`: View changes in files in the staging area.
- `git diff`: View differences between changed files.
- `git log --oneline`: Provide a short summary of commits.
- `git log --oneline --reverse`: Provide a short summary of commits in reverse order.
- `git show HEAD`: View all committed and changed files.
- `git branch`: View all branches.
- `git branch -a`: View all local branches.

## Additional Commands

- `git restore --staged <filename>`: Unstage a file that was mistakenly added to the staging area.
- `git reset <hash ID>`: Delete commits up to the specified hash ID and move them to the unstaged area.
- `git stash`: Stash current changes without committing, to be used later.
- `git stash pop`: Retrieve stashed changes.
- `git stash clear`: Remove all stashed changes.
- `git remote add origin <URL of the REPO>`: Connect the local repository to a remote repository.
- `git remote -v`: View all URLs attached to the working directory.
- `git push origin master`: Push data from the local repository using the origin URL to the master branch.
- For contribution:
  - Fork the project.
  - Copy the HTTP link from your forked repository.
  - `git clone <HTTP URL>`: Clone the repository to your local machine.
  - `git remote add upstream <URL from forked account>`: Connect your local repository to the original repository.

Feel free to format and use this list in your Git-related documentation.

# more...

### Beginner Level:

- `git init`: Initialize a new Git repository.
- `git clone <repository>`: Clone a remote repository to your local machine.
- `git status`: Check the status of your working directory and staging area.
- `git add <file>`: Add a file to the staging area.
- `git commit -m "message"`: Commit the changes in the staging area with a descriptive message.
- `git push`: Push your local commits to a remote repository.
- `git pull`: Fetch and merge changes from a remote repository to your local repository.

### Intermediate Level:

- `git branch`: List all branches in your repository.
- `git checkout <branch>`: Switch to a different branch.
- `git merge <branch>`: Merge changes from a different branch into your current branch.
- `git stash`: Temporarily save changes that are not ready to be committed.
- `git log`: View the commit history of your repository.
- `git remote`: Manage remote repositories linked to your local repository.
- `git fetch`: Fetch changes from a remote repository without merging.

### Advanced Level:

- `git rebase`: Reapply commits from one branch onto another branch.
- `git cherry-pick <commit>`: Apply a specific commit to your current branch.
- `git reset`: Unstage changes or move the HEAD to a previous commit.
- `git reflog`: View a log of your recent branch references and operations.
- `git blame <file>`: Identify the author and commit details of each line in a file.
- `git tag`: Create and manage tags to mark important points in your commit history.
- `git bisect`: Perform a binary search to find the commit that introduced a bug.

### Expert Level:

- `git submodule`: Manage Git submodules within your repository.
- `git filter-branch`: Rewrite branch history by applying custom filters.
- `git worktree`: Manage multiple working trees linked to the same repository.
- `git hooks`: Customize and automate Git workflows using pre- and post-commit hooks.
- `git rebase -i`: Interactively rewrite and modify commit history.
- `git remote set-url`: Change the URL of a remote repository.
- `git fsck`: Perform a low-level repository integrity check.

Remember, Git is a powerful version control system, and mastering these commands will help you efficiently manage your repositories and collaborate with others.