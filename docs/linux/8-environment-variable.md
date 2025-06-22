- just like variable in programming languages in linux we have environment variable which we can set for storing configuration settings for our application
- So our application can read configuration settings from these environment variables

## Lets view and sets environment variable

> printenv

- With these we can see all environment variable on this machine

- lets see value of a environment variable
  > printenv PATH

```terminal
root@3fa853fb44ac:~# printenv PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
root@3fa853fb44ac:~#
```

**Note:** everything is case sensitive here... like you cannot write PATH to path.

- Another way refer env in linux, system know you try to read env
  > echo $PATH

```terminal
root@3fa853fb44ac:~# printenv PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
root@3fa853fb44ac:~#
```

## How to set a variable

- We set variable using `export` command
  > export DB_USER=vipin
  - now this variable is store in current terminal session so we can read it using `echo` command
    > echo $DB_USER

```terminal
echo $DB_USER
vipin
root@3fa853fb44ac:~#
```

**Note:** This variable only available in current terminal session if close this terminal and open new terminal this variable will not exist.

- so lets exit from terminal
  > exit
- lets see all docker processes or container
  > docker ps

```terminal
docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

So nothing here...our container is stopped

- now for seeing all the container including stop container write this
  > docker ps -a
- now we all list of container
  `ONTAINER ID    IMAGE                                           COMMAND                  CREATED`
  `3fa853fb44ac   ubuntu                                         "/bin/bash"              48 minutes ago`

**How to start container**

- for start a container just copy few start word on containerId and write this command, if other id sequence match then type more letter
  > docker start -i 3fa
  - okay container is started
- Now if want see again `DB_USER` env its not exist, bcs this variable no more..

```terminal
root@3fa853fb44ac:/# echo $DB_USER

root@3fa853fb44ac:/#
```

- If you make this variable persistent we need to write spacial command
- lets first go to home directory
  > cd ~

```terminal
root@3fa853fb44ac:~# ls -a
.  ..  .bash_history  .bashrc  .lesshst  .profile
root@3fa853fb44ac:~#
```

- `.bashrc` this file is user personal starter file. so every time a user log in linux load this command [`.bashrc`] from the user home directory. so this is where we write permanent environment variables
- Now we can edit this with nano

  > nano .bashrc

- other technique is redirection to write env in this file lets see
  > echo DB_USER=vipin > .bashrc [note if you do this, it will override all entire file]
  - `>>` use this sign, so this will append `DB_USER` inside `.bashrc`
    > echo DB_USER=vipin >> .bashrc
- lets verify our work
  > cat .bashrc
  - so last line contain our permanent environment variable
- keep in mind don't save sensitive value in env.
- now you can read this env any time, even you stop and then start the terminal

  > echo $DB_USER

- If not exit the terminal you not see the env file, if u exit then start then you see

```terminal
 echo $DB_USER

root@3fa853fb44ac:~#
```

- so if not exit and want to see env, then you need to load .bashrc file again like this
  > source .bashrc

```terminal
root@3fa853fb44ac:~# source .bashrc
root@3fa853fb44ac:~# echo $DB_USER
vipin
root@3fa853fb44ac:~#
```

- Now its work and you can see it---
- if not in home directory write
  > source ~/.bashrc
