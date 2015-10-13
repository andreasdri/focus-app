angular.module('focus.controllers')
  .controller('MainController', function($scope, $ionicModal) {
    $scope.list = [
      {
        title: 'MyTraining',
        icon: {
          on: 'ion-ios-person',
          off: 'ion-ios-person-outline'
        }
      },
      {
        title: 'Library',
        icon: {
          on: 'ion-ios-book',
          off: 'ion-ios-book-outline'
        }
      },
      {
        title: 'Motivation',
        icon: {
          on: 'ion-ios-body',
          off: 'ion-ios-body-outline'
        }
      },
      {
        title: 'Options',
        icon: {
          on: 'ion-ios-gear',
          off: 'ion-ios-gear-outline'
        }
      }
    ];

    $ionicModal.fromTemplateUrl('templates/player.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.playerModal = modal;
    });
    $scope.showPlayer = function() {
      $scope.playerModal.show();
    };
    $scope.hidePlayer = function() {
      $scope.playerModal.hide();
    };

  });



