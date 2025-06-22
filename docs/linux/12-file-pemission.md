lets first lets log in as root#

- lets go to home dit
  > cd /home
- lets create a file inside this dir, called `deploy.sh` file with extension called sell scripts in this file we can write any linux command that we learned so for
  > echo echo hello > deploy.sh
- here i write `echo hello` to `deploy.sh` file and lets verify it
  > cat deploy.sh

```terminal
root@d1859157eb86:~# cd /home
root@d1859157eb86:/home# echo echo hello > deploy.sh
root@d1859157eb86:/home# cat deploy.sh
echo hello
root@d1859157eb86:/home#
```

- to getting permission we need long listing
  > ls -l

```terminal
root@d1859157eb86:/home# ls -l
total 16
drwxr-x--- 2 bob    bob    4096 Jun 22 04:26 bob
-rw-r--r-- 1 root   root     11 Jun 22 06:18 deploy.sh
drwxr-x--- 2 john   john   4096 Jun 22 03:38 john
drwxr-x--- 2 ubuntu ubuntu 4096 May 29 02:23 ubuntu
root@d1859157eb86:/home#
```

- so in this directory we have three dir bob, john, ubuntu, an d one file deploy.sh
- `drwxr-x--- 2` in the first column we have see the permission for each item, look first letter is it is `d` that means it is a directory
- if is a `-` hyphen that means this is a file
- the other letter is actually 9 letter divided into three group here -
- first group `-rw-`
- second group `r--`
- and third group `r--`
- In each group we have read write and execute permissions
- so for this `-rw-r--r-- 1 root   root     11 Jun 22 06:18 deploy.sh` items deploy.sh we only have read and write permission, but execute permission is missing bcs we have hyphen

- `drwxr-x--- 2 bob    bob` look permission for this dir we have read, write and execute, execute is used so we can go in this directory

- `-rw-r--r-- 1 root   root     11 Jun 22 06:18 deploy.sh` but what for this group
- now the first group `-rw-` represent the permission for users who own this file in this case `root`
- The second `r--` group represent permissions the group that owned this file and that is `root` group.

- So by default every user that is created is automatically placed inside a group with the same name.
- now the third `r--` group represent permissions for everyone else.

---

- Now for execute this file we have to write
  > ./deploy.sh

```terminal
root@d1859157eb86:/home# ./deploy.sh
bash: ./deploy.sh: Permission denied
root@d1859157eb86:/home#
```

- here we have permission error bcs as root user didn't have execute permission on this file this is where we use `change mode` command
  > chmod u+x deploy.sh
- so we have execute permission where, deploy.sh.

```terminal
root@d1859157eb86:/home# chmod u+x deploy.sh
root@d1859157eb86:/home# ./deploy.sh
hello
root@d1859157eb86:/home#
```

- lets see long list is one more time
  > ls -l
- now `deploy.sh` color for this file is green that means it executable

```terminal
root@d1859157eb86:/home# ls -l
total 16
drwxr-x--- 2 bob    bob    4096 Jun 22 04:26 bob
-rwxr--r-- 1 root   root     11 Jun 22 06:18 deploy.sh
drwxr-x--- 2 john   john   4096 Jun 22 03:38 john
drwxr-x--- 2 ubuntu ubuntu 4096 May 29 02:23 ubuntu
root@d1859157eb86:/home#
```

- look first `-rwx` group is have read , write and execute

- Now with this setup the root user is only the user who can execute this file.
- so if go another window where we login as john , and try to execute it we get permission error

```terminal
john@d1859157eb86:~$ cd ..
john@d1859157eb86:/home$ ls -l
total 16
drwxr-x--- 2 bob    bob    4096 Jun 22 04:26 bob
-rwxr--r-- 1 root   root     11 Jun 22 06:18 deploy.sh
drwxr-x--- 2 john   john   4096 Jun 22 03:38 john
drwxr-x--- 2 ubuntu ubuntu 4096 May 29 02:23 ubuntu
john@d1859157eb86:/home$ ./deploy.sh
bash: ./deploy.sh: Permission denied
john@d1859157eb86:/home$
```

- So lets enable this file so john [user ] can access this file
  > chmod o+x deploy.sh
- Now in other window see we can access

```terminal
john@d1859157eb86:/home$ ./deploy.sh
hello
john@d1859157eb86:/home$
```

## variations of command

- we can also combine group og(other groups owns this file)
- with we can add execute permission like og+x
- also add write permission og+x+w
- and can remove read permission og+x+w-r
- we can apply this permission any file that follow pattern like
  > chmod og+x+w-r \*.sh
  > chmod og+x+w-r file.sh, file2.sh etc..
