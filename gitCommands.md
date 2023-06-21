Certainly! Here's the list of Git commands with formatting suitable for a markdown file:

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