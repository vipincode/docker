## Lets se how we managing uses

- lets how to create new user
- and login with new user

**In linux there is a command for adding new user, modify user and deleting user**

> useradd -m john
> usermod
> userdel

- If just write `useradd` you can see options-- each option have two form fort from and descriptive see `-m, --create-home ` this

```terminal
root@d1859157eb86:~# adduser
bash: adduser: command not found
root@d1859157eb86:~# useradd
Usage: useradd [options] LOGIN
       useradd -D
       useradd -D [options]

Options:
      --badname                 do not check for bad names
  -b, --base-dir BASE_DIR       base directory for the home directory of the
                                new account
      --btrfs-subvolume-home    use BTRFS subvolume for home directory
  -m, --create-home             create the user's home directory

```

- `-m, --create-home` so with this option we can create the different preferences,
- So with this option we can create home directory for this user

  > useradd -m john [john is username]

- let see where this user- this use is stored in a configuration file in `etc/` directory lets `cat` to see it
  > cat /etc/passwd

```terminal
root@d1859157eb86:~# useradd -m john
root@d1859157eb86:~# cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
---- more
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
ubuntu:x:1000:1000:Ubuntu:/home/ubuntu:/bin/bash
john:x:1001:1001::/home/john:/bin/sh
```

- `john:x:1001:1001::/home/john:/bin/sh` look this line multiple field separated by colon,

  - first we have username `john`
  - then have `:` as separator
  - then `x` - means password is stored somewhere else
  - And this `1001` is userid
  - then it have `1001` group id same as userid
  - and this `/home/john` is the home directory for this user
  - and this `/bin/sh` is the shell program we have used when this user is logged in. it represent old original shell program, here we have also `bash` it enhance the version of this program

- lets say when login we use bash i- lets modify this record
- now lets modify it
  > usermod -s /bin/bash john
  - so here modify `/bin/bash` sell for user `john`
- `-s` for shell, new login for shell for the user accound

```terminal
root@d1859157eb86:~# usermod -s /bin/bash john
--- more
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
ubuntu:x:1000:1000:Ubuntu:/home/ubuntu:/bin/bash
john:x:1001:1001::/home/john:/bin/bash
root@d1859157eb86:~#
```

- `john:x:1001:1001::/home/john:/bin/bash` now its shell program is `/bin/bash`
- Now where are the password , in the same directory we have another file that is `shadow`
  > cat /etc/shadow
  - now this where password are stored in iencrypted format
  - note this file only available for root user

## k

- open new terminal and run `docker ps`
- let run a bash session
  > docker exec d1859 bash
  - press enter nothing happen, bcs we did not interact with bash
  - se we have specify that `-it`
    > docker exec -it d1859 bash

```terminal
docker exec -it d1859 bash
root@d1859157eb86:/#
```

- now see it login as root, now we have session window on is this session and another window
- but i not want login as root i want login as `john`
- lets terminate this session
  > exit
  > docker exec -it -u john d1859 bash
  - so here we start new bash session to identify user john with `-u john`

```terminal
 docker exec -it -u john d1859 bash
john@d1859157eb86:/$
```

- Now I have login as john.s -`d1859157eb86` this is the container id like host name
- Now look at prompt `:/$` here we have `$` which means I am not a root user
- but in another window we have login as root `/#` we have pound, so here we have extra privileges

- lets in login john and access the shadow file
  > cat /etc/shadow

```terminal
john@d1859157eb86:/$ cat /etc/shadow
cat: /etc/shadow: Permission denied
john@d1859157eb86:/$
```

- Se john not have permission[and its verify that i am not root user], also john have home directory
  > cd ~
  ```terminal
  john@d1859157eb86:/$ cd ~
  john@d1859157eb86:~$
  ```
  - now we go in john directory
  - lets see path for this directory, is /home/john
    > pwd
  ```terminal
  john@d1859157eb86:~$ pwd
  /home/john
  ```
- So in this directory we can store johns files
- And when done we can remove john by type this
  > userdel john

**Note:**

- We have a command `adduser`
- lts what difference between `useradd` and `adduser`
- `useradd` this is original api that build
- but `adduser` is a perl script that is more interactive and user uses as `useradd` under hood

## lets create new user

```terminal
root@d1859157eb86:~# adduser bob
info: Adding user `bob' ...
info: Selecting UID/GID from range 1000 to 59999 ...
info: Adding new group `bob' (1002) ...
info: Adding new user `bob' (1002) with group `bob (1002)' ...
info: Creating home directory `/home/bob' ...
info: Copying files from `/etc/skel' ...
New password:
```

- So every user that u created is automatically placed inside a group with same name
- now enter password fr bob - 123
- add another information
- so this is difference btw useradd and adduser...
