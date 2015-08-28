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

#### Windows
Make sure you install and configure the dependencies as described in [this guide](http://ionicframework.com/docs/guide/installation.html), especially the `Windows note on Java, Ant and Android`.

Install [Genymotion](https://www.genymotion.com/) if you want a faster emulator than the default one included in the Android SDK. Otherwise, replace `ionic run` with `ionic emulate` below:

```bash
$ ionic platform add android
$ ionic build android
$ ionic run android
```
