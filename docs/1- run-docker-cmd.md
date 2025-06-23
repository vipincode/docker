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
