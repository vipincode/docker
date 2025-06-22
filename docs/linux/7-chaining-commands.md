In linux we can combine and chaining multiple commands

> mkdir test;cd test;echo done;

- If we execute this we these commands executed one after another
- Instead of semicolon we can use `&&` and operator
  > mkdir test && cd test && echo done
  - So here if first command fail other will not executed.
- We also have the `OR` operator
  > mkdir test || cd test || echo "directory exist"
  - Here if `mkdir test` this command executed then second command will not
  - But first command fails then second command will executed
- Another way to chain command is piping..

  > ls /bin | less
  > les /bin |head - you can see first 10 line
  > les /bin |head -n 5 - you can see first 5 line

  - here what we get form `ls /bin` go inside less and print to the screen

- Some time command will look hard to read so can septate it into multiline
  > mkdir hello; \
  > cd hello; \
  > echo done
  - So by `\` this you can keep going to the next line.
