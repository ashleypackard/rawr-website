rawr-website
============

Final project for Comp 553

This is a website built using the WAMP arcitechture as the final project for Comp-553 (WWW class).

Basic template is up. Follow similar format of what I've done for adding any additonal static pages. I've just come up with a few off the top of my head. I'm not attached to them :) Feel free to move the order of the links around.

Please make a new branch for your work off master so we don't lose any progress!

git checkout -b 'branchname'

^^ use this to checkout out a new branch replacing 'branchname' with some text, no "" necessary!

I find the git bash is most useful for this since we're not on macs -_-

Make sure to have the WAMP server installed and place the files under the www directory.

<u>Helpful commands:</u>

<b>git pull</b>
--use this to update your branch, so if two people are working on same branch and one does a commit the other needs to do a pull to get the new changes.

<b>git status</b>
--checks what files you've modified, deleted, added

<b>git branch</b>
--gives you a list of branches you've downloaded

<b>git checkout 'branchname'</b>
--use this to checkout someone elses branch, replacing 'branchname' entirely with the branch you want, as well as to switch branches. to create a new branch use this option: -b ( git checkout -b "the_name_of_the_branch_you_want" ) NO SPACES or you'll want to die

<b>git add 'filename'</b>
--use this after running at git status to add one file at a time to be commited. use: git add -A, to add all files at once

<b>git commit -m "your message"</b>
--use this after adding all the files you want committed. This just commits to your local machine. Make sure to run the command below to push to our github repo!. Here the "" are needed. Please provide a brief meaningful message of what you updated.

<b>git push origin head</b>
--use this after commiting to push all your changes to the repo!

This is the gist of it. I have a lot more knowledge if you get stuck but this should be good for now :D
