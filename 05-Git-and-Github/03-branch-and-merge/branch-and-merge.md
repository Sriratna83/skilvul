1. What does `git clean` do? **deleting untracked files in repo working directory**
2. What do the `-d and -f` flags for `git clean` do? **git clean -f used when you want to just remove all untracked files inside The main root directory Or other already tracked (committed) directories. If you want to remove 1) untracked directories with 2) all their contents, in addition to what is done by git clean -f , you need to run "git clean -f -d"**
3. What `git` command creates a branch? **git branch <name_branch**
4. What is the difference between a fast-forward and recursive merge? **The merge commit continues to have two parents. Note: There is nothing right or wrong of either one of the strategies but with fast forward merge you have a straight line of history and with the recursive merge, it is of multiple lines.**
5. What `git` command changes to another branch? **git checkout <name_branch>**
6. How do you remove **modified or deleted** files from the working directory? **git clean or git reset** 
7. What `git` command deletes a branch?  **git branch -d <branch>**
8. What does the `git diff` command do? **The git diff command shows the differences between the files in two commits or between your current repository and a previous commit**
9. How do you remove files from the staging area?  git rm --cached <file>
10. How do merge conflicts happen? **when two branches both modify the same region of a file and are subsequently merged**