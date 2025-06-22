We have `grep` command this is short form og global regular expression print

> grep hello file1.txt

- we search word hello in file1.txt but this is case sensitive search

- if you search with case insensitive put `-i` like this
  > grep -i hell file1.txt

```terminal
root@94dfc6937f15:~# grep hello file1.txt
hello world
root@94dfc6937f15:~# grep -i root /etc/passwd
root:x:0:0:root:/root:/bin/bash
root@94dfc6937f15:~#
```

- lets search in multiple file

  > grep -i hello file1.txt file2.txt

- you can also use patter file\* , search in all file which are start with file-

  > grep -i hell file\*

- You can search with directory, and also use option `-r` to short for recursive, we with we search directory and it sub directory recursively
  > grep -i -r hello . [current dir]

```
root@94dfc6937f15:~# grep -i -r hello .
./file2.txt:hello world
./file1.txt:hello world
root@94dfc6937f15:~#
```

- In linux we can combine multiple option, here we can combine `-i` and `-r` like `-ir`

  > grep -ir hello

- So using grep command we can search a string in one or more file
