- First add a docker file in application
- Docker files contains instruction for building an image

## process

- `1: From:` For specifying base image so we take that base image which contains bunch of files and directories and then we build on top of it
- `2: WORKDIR:` for specifying the working directory. Once we use this command, all the following command will executed in the current working directory.
- `3:  COPY:` this if for copying files and directories
- `4: Add: `
- `5: run:` this is for executing operating system command

So all the linux command that we see in previous section, we can execute them using run.

- We also have
- `ENV`: for environment variable
- `EXPOSE`: this is for telling docker that our container is starting on a given port
- `USER`: for specifying the user that should run the application
- `CMD`
- `ENTRY POINT`
