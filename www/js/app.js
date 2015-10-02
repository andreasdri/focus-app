// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('focus.controllers', []);
angular.module('focus.filters', []);
angular.module('focus.services', []);
angular.module('focus.directives', []);

angular.module('focus', ['ionic', 'ngCordova', 'ngIOS9UIWebViewPatch',
  'focus.controllers', 'focus.filters', 'focus.services',
  'focus.directives'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('main', {
      url : '/main',
      templateUrl : 'templates/main.html',
      abstract : true,
      controller: 'MainController'
    })

    .state('main.home', {
      url : '/home',
      views: {
        'mainContent': {
          templateUrl: 'templates/home.html',
          controller: 'ChaptersController'
        }
      }
    })

    .state('main.motivation', {
      url : '/motivation',
      views: {
        'mainContent': {
          templateUrl: 'templates/motivation.html',
          controller: 'MotivationController'
        }
      }
    })

    .state('main.purchase', {
      url : '/purchase',
      views: {
        'mainContent': {
          templateUrl: 'templates/purchase.html',
          controller: 'DownloadController'
        }
      }
    })

    .state('main.options', {
      url : '/options',
      views: {
        'mainContent': {
          templateUrl: 'templates/options.html',
        }
      }
    })

    .state('main.options.about', {
      url : '/about',
      views: {
        'mainContent@main': {
          templateUrl: 'templates/about.html'
        }
      }
    })

    .state('main.options.olympiatoppen', {
      url : '/olympiatoppen',
      views: {
        'mainContent@main': {
          templateUrl: 'templates/olympiatoppen.html'
        }
      }
    })

    .state('main.options.copyright', {
      url : '/copyright',
      views: {
        'mainContent@main': {
          templateUrl: 'templates/copyright.html'
        }
      }
    })



    $urlRouterProvider.otherwise('/main/home');
})

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
