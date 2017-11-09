# Greenfield Against Humanity

An online multiplayer version of Cards Against Humanity.  Submit to your indecency.

## Introduction

Greenfield Against Humanity is a way to play your favorite game online with your friends or with strangers.  Create and join game rooms, and set the number of points it takes to win based on how long you want to play!  Custom deck creation coming soon!

## Demo
Video demo coming soon!

![alt text](https://i.imgur.com/ym5Xvxv.png "In-game screenshot")

## Usage

A production build for this application is available here:

https://limitless-beyond-58814.herokuapp.com/

If you would like to run this application locally, see the Local Installation section below.

## Local Installation

### Requirements

This application requires node and you can use npm to install all other dependencies, including:
- React
- Webpack
- Express
- Passport
- Socket.io

### Installation

First fork a copy of this repo, then clone/download your forked copy or this repo by copying the link from github.  If cloning make a local copy using:

```
git clone <git link here>
```

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

## File Structure

At the root level the following file should be added:

```
.env (with environment variables as explained above)
```

### Notes about root files

- This application uses pomander to enforce linter rules for coding style.  
- webpack.config.js is already setup to use babel for compiling .jsx files into es2015-compatible code in the bundle.js file

### Front End

All front end related files can be found in `/client`. 

```
client
|-- dist (all static files, bundle.js compiled file ends up here)
|-- src (all source files for react components and front-end socket)
    |-- components
    |   |-- ...all component jsx files
    |-- socket
    |   |-- index.js
    |-- index.jsx (starter component)
```

### Back End

All back end related files can be found in `/server`.

```
server
|-- controllers (controller files for used by route handlers, 
|   |            currently only utilizing user controller for user auth)
|   |-- ...controller files
|-- routes (route handler files, also only currently using 'users' route)
|   |-- ...route files
|-- db (database files)
|   |-- config (db connection)
|   |-- seeding (for seeding the base deck to the database)
|-- socket (all back-end socket functionality)
    |-- controllers (socket functions called by socket listeners)
    |-- routes (socket listener events)
    |-- gameManager (gameplay and game state trackers)
```

## Credits

This project was built for the Greenfield team sprint at Hack Reactor LA

### Team Members

- Tyler Vander Maas - tvmaasjazz@gmail.com
- Lillian Anderson - lilliananderson@ucla.edu
- Philip Marazita - pmarazita@gmail.com

## Contact

Inquiries can be made to any of the team members' emails lsited above
