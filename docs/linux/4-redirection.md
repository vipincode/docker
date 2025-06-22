One of the important concept in linux is the concept of ths standard input an output

- So the standard input represent the keyboard
- and standard output represent the screen.
- but we can always change the source of input and output this called redirection
  Ex: let see content of a file
  > cat file1.txt
  ```
  Hello world
  ```
- so here cat command read data from file1.txt and print it standard out which is screen, thats why see content here
- but using the redirection operator which is `>` greater than sign we can redirect the output form the screen to let say in different file
  > cat file1.txt > file2.txt
- So not cat will read the file from file1 and write it to file2.

```terminal
root@94dfc6937f15:~# cat file1.txt
hello world
root@94dfc6937f15:~# cat file1.txt > file2.txt
root@94dfc6937f15:~# ls
file1.txt  file2.txt
root@94dfc6937f15:~#
```

- you can view it in same way

```terminal
root@94dfc6937f15:~# cat file2.txt
hello world
root@94dfc6937f15:~#
```

here you see exact same content as file1

## cat also concat files

> cat file1.txt file2.tx

- here cat concat these file and print data

```
hello world
hello world
```

- lets use redirection operator and write this content in another file

  > cat file1.txt file2.tx > combine-file.txt

- redirection (>) operator is not limited to the cat command we can use it pretty much anywhere
  > echo hello > hello.txt
  > its create a file hello.txt and write hello in it you can see it by `ls`
  > ls
  > hello.txt file1.txt file2.txt
- Read the file
  > cat hello.txt

> ls -l /etc > files.txt

- lets view this file
  > cat files.txt

## Less than standard input (<)
