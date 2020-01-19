# AI Text Analysis with Natural Language Processing

This repo contains an app designed to extract an article from a given link, then analyze the text of the article using the [Aylien Text API](https://aylien.com/text-api/) to handle Natural Language Processing tasks.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

In order to setup locally, this project relies on [Node Package Manager](https://www.npmjs.com/get-npm)(You can also use [Yarn](https://yarnpkg.com/lang/en/), but this guide will continue to use commands for npm).

You'll also need to [register for an Aylien API key](https://aylien.com/text-api/), then create a file name`.env` to copy those credentials into. You'll want to create this file in project root folder, and it should be in the format:

```
API_ID=**************************
API_KEY=**************************
```

Once you've got your API ID and API key saved, you're ready for installation!

### Installation

Once you've downloaded this repository to your local machine, `cd` into your repo directory and run the command,

```
npm install
```

which will download and install all required dependencies for the project. Now, you're setup to use the app to analyze the text of any article!

### Running the app

<<<<<<< HEAD
These instructions assume a typical use case in production mode. If you plan to further develop the files for your own purposes, then you can follow these instructions to start development mode)

To compile the app in production mode(which is the most common use), simply enter the command

```
npm run build-prod
```

which will build the files for use. This creates a streamlined version of all required assets in the `dist` folder. Next, start up the server to handle incoming request by running

```
npm start
```

This will show a number of lines of output, including

```
Example app listening on port 8080!
```

Now you're ready to open the `index.html` file in your browser, and submit a URL containing an article for analysis!

#### Development Mode

Most users will not require running the app in development mode, but if you are a developer who intends on creating further functionality in the app, then you may be interested in running the project in development mode. First, use terminal or the command line to access the project directory, then enter

```
npm run build-dev
```

Unlike the production build command, this will automatically launch the client app in your default browser. Because of the continued logging in the terminal, you'll need to open a second terminal window to start your development server:

```
npm start
```

Now your application is ready to accept incoming requests!

![Display of a successful project setup showing purple-pink frog logo, project title, and basic input form]("img/Project-Screenshot.png")

## Tests

Testing is handled with the [Jest JavaScript Testing](https://jestjs.io/en/) framework, and all included tests can be run with the command

```
npm test
```

![Console display showing 8 tests in 2 suites successfully completing in 3.102s]("img/Tests.png")


## Deploying

If you'd like to deploy a version of this app online easily, checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options!

## Built With

[Aylien](https://aylien.com/text-api/) - Natural Language Processing API
[Node.js](https://nodejs.org) - Non-browser JavaScript runtime
[webpack](https://webpack.js.org/) - Code bundling and configuration
[express](https://expressjs.com/) - Web server for Node.js
[Jest](https://jestjs.io/en/) - Code testing


## Special thanks

[PurpleBooth Readme Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
