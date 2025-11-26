# Project details

Application to generate a chat with Ionic Angular connecting to socket private channels of a backend development project in NodeJS.

|                |Version							|
|----------------|-------------------------------|
|Angular|`20.0.0`            |
|NPM          |`11.5.2`            |
|Node.js          |`22.14.0`|
|Ionic CLI          |`5.4.6`|
|Docker          ||

## Important note 

The source code documentation and project structure were generated using the compodoc library, which generates a static web page that can be deployed on a server. In this case, it was deployed on GitHub. [Documentation](https://dev-shelvin-batista.github.io/ionic-socket-chat/)

## Instructions

To run the frontend project, follow these steps:

- Clone the project, either with the command git clone `https://github.com/dev-shelvin-batista/ionic-socket-chat.git` or using a GitHub graphical tool.

- After cloning the repository, install the node dependencies using the command `npm install` inside the `ionic-socket-chat` project folder. If an error occurs, add the --force option.

- Run the command `ionic serve` to start the server. By default, the url `http://localhost:8100` is used.

## Docker Instructions

To run the frontend project in a Docker container, follow these steps:

- Clone the project, either with the command git clone `https://github.com/dev-shelvin-batista/ionic-socket-chat.git` or using a GitHub graphical tool.

- Access the folder in a command terminal using the cd command.

- The project already has a Dockerfile that generates the image to create the container. Just create the image with the `docker build -t ionic-socket-chat .` command.

- Create the container from the image created by running the `docker run --rm -p 8100:8100 ionic-socket-chat` command.

- After running the above command, the container will be active and you will be able to access the frontend project from the host with the URL `http://localhost:8100/`.

- You can change the port to be used on the host by modifying the port in the **docker run** command in the **-p** option.