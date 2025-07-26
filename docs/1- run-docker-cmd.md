## Build docker image

`docker build -t <image-name> . ` [period tells where it find docker file]

> docker build -t hello-docker .

## See all docker images

docker images
docker image ls

## Lets run container with the image

`docker run <image-name>`
can it in interactive mode
`docker run -it <image-name>`
docker run hello-docker [image name]

## Now you are in Node.js environment

```terminal
╭─   vipin  D:  Apps  docker  section4-react-app   master    ?2 ~1                                                           2ms   17:44:23 ╰─ $ docker run -it react-app
Welcome to Node.js v20.19.2.
Type ".help" for more information.
>
<!-- here you can write js code node will run it -->
const x = 1
undefined
> console.log(x)
1
undefined
```

## Run Bash

- But we not want this I want run `bash` so will look file system
- press ctrl + c and exit

**let run** `docker run -it react-app bash`

```terminal
docker run -it react-app bash
node:internal/modules/cjs/loader:1215
  throw err;
  ^

Error: Cannot find module '/bash'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1212:15)
    at Module._load (node:internal/modules/cjs/loader:1043:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.19.2
```

- its says module is not found, why that happen bcs, `alpine linux` does not come with `bash`, thats why its very small linux distribution, instead of bash its comes with shell, the original shell program

**So once more let run app, with shell not bash**
`docker run -it react-app sh` sh- shell

```terminal
 docker run -it react-app sh
/ #
ls
bin    dev    etc    home   lib    media  mnt    opt    proc   root   run    sbin   srv    sys    tmp    usr    var
/ #

<!-- it also have node version -->
node --version
v20.19.2
```

Here we not have our application file here we have only alpine linux

## Lets copy application file into image

lets copy the application file into the image for that we have two instruction
1: COPY
2: ADD
they have same syntax but add have couple of more feature...

- With COPY , it can copy one or more file or directory from the current directory[ meaning app/ dir where all project file lives] into the image
- We cannot copy anything outside of this directory, here is the reason, when we run this `build` command
  > docker build -t hello-docker .
  - here the period (.) means the current directory so when we execute this command docker client sends the content of this directory to docker engine this is called the build context
  - So the docker client sends the build context to docker engine and then docker engine will start executing this `COPY` command written in `Dockerfile` docker file one by one
    -So at that point docker engine does not have access to any files or directories from the outside of the project directories

`COPY . /app/` means copy everything into app dir.

```terminal
WORKDIR /app
COPY . .
```

this means copy everything from current dir [first dot] to working dir that is `WORKDIR /app` denoted as second dot.

- Now lets rebuild our image

  > docker build -t react-app .

- Now lets run app after build
  > docker run -it react-app sh
  - Here i run shell to see file system

```terminal
docker run -it react-app sh
/app #
```

- look here we are inside app directory, bcs in `Dockerfile` we have set `\app` is current working directory
- Now lets run `ls`

```terminal
ls
Dockerfile         README.md          node_modules       package-lock.json  package.json       public             src                yarn.lock
/app #
```

- Now see here we have all files and directory in our project including node modules

## Lets exclude some file and directory

- Add `.dockerignore` file and there just like .gitignore list you file want to exclude from build


## Next Lets install project depenndancy
- RUN npm install
- lets build the image `docker build -t react-app .`
- when the image is build run image shell `docker run -it react-app sh`

## Setting Environmnet variable
 - Sometime we need to set environment variables lets say this frontent application need to talk to a backend API but often we set the URl of the API using an environemnt variable this is where we use the `ENV` instruction
 - ENV API_URL=http://myapp.com/
 - afeter build image and run image
 - For inspect env we `printenv`
 - If want to print value of a specific value ex: `printenv API_URL`
 - Another option to use echo -- print value ex:
 > echo $API_URL

  So whenever you start this container these environment variable is automatically set for us.

  ## Use `Expose` to look what container is listening for
  - Expose 3000
  - The expose command does not automatically publish port on the host its just a form of document to tell us this container eventually listen on port 3000. So latter when we properly run this application inside a docker container we know that we should map a port on the host to port 3000 on the container 


  ## User 
  Docker run by default on root user that has highest previlages so that can open security sysytem on computer so to run this application we should create a regular user with limited previlages
  - But before doint this docker file lets open a shell session in appline linux and play with few command.

  > docker run -it alpine
  - now this start the shell sesion
  > useradd [this image does not have useradd command]
  ```terminal
  / # useradd
/bin/sh: useradd: not found
/ #
```
- instead we have `adduser` command
```terimnal
/ # adduser
BusyBox v1.37.0 (2025-05-26 20:04:45 UTC) multi-call binary.

Usage: adduser [OPTIONS] USER [GROUP]

Create new user, or add USER to GROUP

        -h DIR          Home directory
        -g GECOS        GECOS field
        -s SHELL        Login shell
        -G GRP          Group
        -S              Create a system user
        -D              Don't assign a password
        -H              Don't create home directory
        -u UID          User id
        -k SKEL         Skeleton directory (/etc/skel)      
/ #
```
- We use this two command
-G GRP          Group
        -S              Create a system user
- We use system user bcs this is not real user, this is just running our application
- before using this command we need to create a group and add user in this group.
- So lets create group
> addgroup app
> adduser -S -G app app
- lets add user -
- -S - for creating a system user
- -G - for setting the primary group which is `app`
- and finally specify the name of user, we are going use same name `app`, this common best practice in linux
- So when ever we create a new user we create a primary group with that user with same name.
```terminla
/ # adduser -S -G app app
/ # 

```
- Now we have new user so lets verify that is this user in right group.
> groups app
```terminal
/ # groups app
app 
/ # 
```
- This show the groups for the app user
- lets combine prev group, all command and create new group
> addgroup vipin && adduser -S -G vipin vipin
- So here we use single command to perform two task
- lets verify groups for vipin
```terminal
/ # groups vipin
vipin
/ #  
```
- So this `addgroup vipin && adduser -S -G vipin vipin` is the command we run it in docker file

- So in docker file lets run this command, insted of vipin we use app
> RUN addgroup app && adduser -S -G app app
- so we gonna create a group and user called app
- After that let set the user
> USER app
- So all the following command will be executed using this `app` user
- lets save the changes and rebuild the image.
> docker build -t react-app .
- now lets start new container and make sure the current user is `app` user not the root user
> docker run -it react-app sh   [sh - start a shell session]

```terimonal
 docker run -it react-app sh
/app $ 
```
- now lets print current user name
```terminal
/app $ whoami
app    
/app $ 
```
- so app user
- lets get long listing `ls -l`
```terminal
/app $ ls -l
total 1384
-rwxr-xr-x    1 root     root           166 Jun 25 02:54 Dockerfile       
-rwxr-xr-x    1 root     root          3362 Mar  5  2021 README.md        
drwxr-xr-x 1056 root     root         36864 Jun 25 02:55 node_modules     
-rwxr-xr-x    1 root     root        865297 Jun 25 02:55 package-lock.json
-rwxr-xr-x    1 root     root           813 Mar  5  2021 package.json     
drwxr-xr-x    2 root     root          4096 Mar  9  2021 public
drwxr-xr-x    2 root     root          4096 Mar  9  2021 src
-rwxr-xr-x    1 root     root        484923 Jun 25 02:55 yarn.lock        
/app $ 
```
- look all the file owned by root user and first column you can see permission for root user
- so root user write any file but current session is running app user , so app user not able write any of this file\=- so if we execute this file as root user a hacker can be write anything to our file

## defining Entrypoint
let start our container
> docker run react-app npm start
- we get some error, lets mode user command at top
```terminal
FROM node:20.19.2-alpine3.22
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY . .
RUN npm install
ENV API_URL=http://myapp.com/
EXPOSE 3000
```

- Start new container
- you can add in docker file to run app
> CMD ["npm", "start"] - [exec form] or CMD npm start [shell form]
- now then run like this.
```
docker build -t react-app .
docker run -p 3000:3000 react-app
```

- now our web server is running on port 3000, but note this port 3000 of the container. not local host,
- if you go to this address we are not able to access the apllication, 

-- prev lec have error look again and resolve it.

## speeding up builds.