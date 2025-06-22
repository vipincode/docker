- just like managing user we have these command

  > groupadd
  > groupmod
  > groupdel

- Lets create a group
  > groupadd developers
- Why we need group- We use groups for all users in same group have same kind of permission

- group exist `/etc` dir

  > cat /etc/group

  ```terminal
  root@d1859157eb86:~# groupadd developers
  root@d1859157eb86:~# cat /etc/group
  root:x:0:
  ...more--
  nogroup:x:65534:
  ubuntu:x:1000:
  john:x:1001:
  bob:x:1002:
  developers:x:1003:
  ```

- here we all groups of this image- this `developers` group of developer and this is `1003` id
- lets add `john` to this group

  > usermod

  - ` -g, --gid GROUP    force use GROUP as new primary group` this is option to insert user this new grop
  - ` -G, --groups GROUPS           new list of supplementary GROUPS`

**So what difference in this -g and -G**

- well Every linux user has one `primary` group and zero (0) or more supplementary group, now why these group are separated- now lets say john is part of five group and now he want to create a new file [note every file is owned by one user or one group],
- So here is question, if john is part of five group which group should be used owned new file that john is created, thats why we need a primary group
- now the primary group is automatically created when we create a new user, its the group same name as user

- so lets add john into developers group

  > usermod -G developers john

- `usermod -G developers john` []

- lets see password file

```terminal
root@d1859157eb86:~# cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
irc:x:39:39:ircd:/run/ircd:/usr/sbin/nologin
_apt:x:42:65534::/nonexistent:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
ubuntu:x:1000:1000:Ubuntu:/home/ubuntu:/bin/bash
john:x:1001:1001::/home/john:/bin/bash
bob:x:1002:1002:Bob Smith,100,9100002222,532:/home/bob:/bin/bash
root@d1859157eb86:~#
```

- lets search fro john
  > cat /etc/passwd | grep john

```terminal
root@d1859157eb86:~# cat /etc/passwd | grep john
john:x:1001:1001::/home/john:/bin/bash
root@d1859157eb86:~#
```

- or another way

  > grep john /etc/passwd

- Lets see group of users
  > groups john [users]

```terminal
root@d1859157eb86:~# groups john
john : john developers
root@d1859157eb86:~#
```

- so here john is part of two group
- The one is `john developers` which is `john` primary group and other is `developers` which is supplementary group
