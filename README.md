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



## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
