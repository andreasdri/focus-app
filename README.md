Focus 
===============

This is the repo for the Focus cross-platform mobile app. 

##Setup 

Install [NodeJS](https://nodejs.org) and run `npm install -g cordova ionic bower gulp` from command line (you might want to run this command with sudo on Linux/Mac depending on your setup).

```bash
$ git clone git@github.com:andybb/focus-app
$ cd focus-app
$ npm install
$ bower install
```

##Serve the app locally

```bash
$ ionic serve
```

The app should be available at `http://localhost:8100` with livereload.

##Run on devices

### iOS

```bash
$ [sudo] npm install -g ios-sim
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

### Android

Coming up...

