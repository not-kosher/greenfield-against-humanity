# Greenfield Against Humanity

An online multiplayer version of Cards Against Humanity.  Submit to your indecency.

## Introduction

Greenfield Against Humanity is a way to play your favorite game online with your friends or with strangers.  Create and join game rooms, and set the number of points it takes to win based on how long you want to play!  Custom deck creation coming soon!

## Usage

A production build for this application is available here:

https://limitless-beyond-58814.herokuapp.com/

If you would like to run this application locally, see the Installation section below.

## Local Installation

### Requirements

This application requires node and you can use npm to install all other dependencies, including:
- React
- Express
- Passport
- Socket.io

### Installation

First fork a copy of this repo, then clone/download your forked copy or this repo by copying the link from github.  If cloning make a local copy using:

```git clone <git link here>```

Once dowloaded, navigate to the directory in a terminal window and run:

```
npm install
```

Compile code and run a local server using:

```
npm run build
npm start
```

If you would like to make changes to the repo you can run the following commands to recompile and restart your local server as changes are made:

```
npm run dev
npm run startmon
```

### Configuration

This application uses a .env file to configure various environment variables.  This must be created locally with the following variables:

```
PORT=[port number to run from]
SESSION_SECRET=[a string to use for authentication sessions]
DATABASE_URL=[url to a postgres database]
```

Only the database URL is required for running locally, although other URLs should be added for any production builds.  If you need a postgres database you can go here to quickly get a free link for personal use:

https://www.elephantsql.com/

## Credits

This project was built for the Greenfield team sprint at Hack Reactor LA

### Team Members

Tyler Vander Maas
Lillian Anderson
Philip Marazita

## Contact

tvmaasjazz@gmail.com
lilliananderson@ucla.edu
pmarazita@gmail.com