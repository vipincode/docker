## Directories

**Just like windows linux have file directory**

**In windows directory like**

c:/

- programs files
- windows

**Same way linux have, here (/)` slash is root dir**

/

- bin - which include binary and programs
- boot - which includes all files related to booting
- dev - its shorts for devices, files are needed access to devices stored here [in linux everything is file including devices, directory network socket pipes and so on .. so the files that are needed to access devices are stored in this directory]
- etc - editable text configuration, here we have configuration files
- home - this where home directory users are stored [machine have multiple users each users going to have home directory here]
- root - this is home directory of the root user only root user can access the directory
- lib - used for keeping library files like software library dependency
- var - short for variable , and this where files are updated frequently like lock files application data and so on.
- proc - which includes files that represent running process

Note: In linux everything is files process, devices even directories are files.

## Navigate to files system

> pwd [short for print working directory]

- with this we see where we are in file system.
- we know forward slash (/) represent root directory

> ls [Now to see file and directories - short for list]
> ls -1 [print output in one line]
> ls -l [To long listing]

> cd [this is used for change the current directory]
> cd [after it we use relative or absolute path]

- A relative path is relative to where we are, so like bin , boot and so on
- and absolute path is always start with / root path
  ex: cd etc/a press tab, if nothing happen press tab once again it show may be multiple dir start with letter a

> cd .. [to get out of this directory we can go one level up with (..) with this two periods]

- Or if want to go two level up just write ` cd ../..`

> ls /bin [to see what inside bin directory without navigation path]

- if are in root directory and want to see what inside bin, we can just write `ls /bin`
- we can see inside `pwd` the command- so pwd is a program in this directory
- we have also see echo
- So most of the commands we have been exploring so far our programs or binaries in the bin directory

> cd ~ [by this we are going inside home directory to see hone `ls`]
> root@94dfc6937f15:/# ls
> bin boot dev etc home lib lib64 media mnt opt proc root run sbin srv sys tmp usr var
> root@94dfc6937f15:/# cd ~
> root@94dfc6937f15:~# ls
> root@94dfc6937f15:~#

## Manipulation Files and Directories

- lets move from root dir to home
  > cd ~
- I this directory lets create a dir test [blue color represent a directory]
  > mkdir test
  > ls [check what inside]
- Lets rename this directory
  > mv test docker [with mv we move file or folder here we rename test folder name to docker]
- now lets go inside `docker` directory and crate a new file with `touch` command
  > cd docker/
  > touch hello.txt
- with ` touch` command we can create multiple files in one go
  > touch file1.txt file2.txt file3.txt
- lets rename `hello.txt` something else
  > mv hello.txt hello-docker.txt
- and if you want to move it in different directory
  > mv hell.txt etc/ [here i am using absolute path]

## Note: Use `ctrl +w` remove last entire line

- mv hello.txt hello-docker.txt [with `ctrl + w` you this `hello-docker.txt` test removed in one go ]

**- Lets remove one or more file**

- with rm we can remove file
  > rm file1.txt file2.txt file3.txt
- we remove multiple file with pattern like start with `file*`
  > `rm file*`
- we can remove directory itself
  > cd .. [back one level]
  > ls [see file]
  > rm -r docker [remove directory and its content, -r means recursively]

**View and Edit files**

- lets install nano
  > apt update
  > apt install nano -y
- lets confirm nano is install
  > nano
- lets open nano editor with file
  > nano file1.txt
- not edit and save it press ctl + x and follow further
  > ls
- now we have file1.txt
- to see content of this file we have some command-
- `cat` [shot concatenate] with you can combine multiple files, but with this you can see the content of file
  > cat file1.txt
- Cat is use full when file is short and fit ob page
- if you dealing with long file its better to use `more` command
  > more etc/adduser.conf
- use space to to go next page
- press enter to go one line at time
- exit press `q`
- but one problem we can not go up, so we need to install `less`
  > apt install less
- lets see same file with less command
  > less etc/adduser.conf
- Now using up and down arrow you can move up and down
- you can also use space an enter..same as

> head -n 5 [with this you can see first 5 line]
> tail -n 5 [with this you can see last 5 line]
