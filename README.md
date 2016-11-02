# es6-react-setup

to exit from git diff use q

I try now to do some change just to understand the flow

with >git reset< I can reset a git add before commit

with
$ git commit -m "Something terribly misguided"              (1)
$ git reset HEAD~                                           (2)
<< edit files as necessary >>                               (3)
$ git add ...                                               (4)
$ git commit -c ORIG_HEAD                                   (5)



1   This is what you want to undo

2   This leaves your working tree (the state of your files on disk) unchanged but undoes the commit and leaves the changes you committed  unstaged (so they'll appear as "Changes not staged for commit" in git status and you'll need to add them again before committing). If you only want to add more changes to the previous commit, or change the commit message<1>, you could use git reset --soft HEAD~ instead, which is like git reset HEAD~ but leaves your existing changes staged.

3   Make corrections to working tree files.

4   git add anything that you want to include in your new commit.

5   Commit the changes, reusing the old commit message. reset copied the old head to .git/ORIG_HEAD; commit with -c ORIG_HEAD will open an editor, which initially contains the log message from the old commit and allows you to edit it. If you do not need to edit the message, you could use the -C option.

<1> Note, however, that you don't need to reset to an earlier commit if you just made a mistake in your commit message. The easier option is to git reset (to unstage any changes you've made since) and then git commit --amend, which will open your default commit message editor pre-populated with the last commit message.

Beware however that if you have added any new changes to the index, using commit --amend will add them to your previous commit.
