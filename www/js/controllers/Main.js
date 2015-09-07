angular.module('focus.controllers')
  .controller('MainController', function($scope, $ionicModal) {
    $scope.list = [
      {
        title: 'Home',
        icon: {
          on: 'ion-ios-home',
          off: 'ion-ios-home-outline'
        }
      },
      {
        title: 'Chapters',
        icon: {
          on: 'ion-ios-list',
          off: 'ion-ios-list-outline'
        }
      },
      {
        title: 'Settings',
        icon: 
        {
          on: 'ion-ios-gear',
          off: 'ion-ios-gear-outline'
        }
      },
      {
        title: 'About',
        icon: {
          on: 'ion-ios-information',
          off: 'ion-ios-information-outline'
        }
      }
      ];

    $ionicModal.fromTemplateUrl('templates/player.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.showPlayer = function() {
      $scope.modal.show();
    };
    $scope.hidePlayer = function() {
      $scope.modal.hide();
    };
  });
