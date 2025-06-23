## Images and Container

An image includes everything thats a application needs to run.

- so its contain a cut down operation system like linux or windows
- it also contain third party libraries application files, environment variable and so on..

- So an image contain all the files and configuration setting needed to run an application
- Once we have an image we can start a container from it

## container

A container is like a virtual machine in the sense that is provided a isolated environment fro executing an application. And similar to virtual machines we can stop and restart containers

- Now technically a container is just a operating system process, but it is a special kind of process because its have its own file system which is provided by the image.

- A container gets its file system from the image, but each container has its own right layer, so what we write in a given container it is invisible in other container
