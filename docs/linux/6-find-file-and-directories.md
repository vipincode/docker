In linux we have `find` command for finding file and directories

- If we execute this command without any arguments we see all file and directories in the current directory recursively so this command is going to go through every directory in this directory and list their file

```terminal
root@94dfc6937f15:~# find
.
./.profile
./.bashrc
./file2.txt
./file1.txt
./files.txt
./.local
./.local/share
./.local/share/nano
root@94dfc6937f15:~#
```

- here some files are hidden we cannot see, by `ls` use `ls -a` a fro all this show all files including hidden file
- if you what look somewhere else use like this

  > find /etc

- if you want only see directory write [it directory is current directory]

  > find -type d

- We acn search for file

  > find -type f

- We can also filter by name
  > find -type f -name `"f*"`
  > here we find all file that start with f-- [f - for all file]
- just remember this search is case sensitive

- if you want make case insensitive [put i option]
  > find -type f -iname `"F*"`

## lets find all python file start with this root dir

> find / -type f -name `"*.py"`

- lets write all python file in a file python-file.txt using redirection operator
  > find / -tye f -name `"*.py"` > python-file.txt
  > cat python-file.txt - read the file to verify everything is working
