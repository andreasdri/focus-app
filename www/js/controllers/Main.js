angular.module('focus.controllers')
  .controller('MainController', function($scope, $ionicModal) {
    $scope.list = [
      {
        title: 'Home',
        icon: {
          on: 'ion-music-note',
          off: 'ion-music-note'
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
        title: 'Purchase',
        icon:
        {
          on: 'ion-ios-cart',
          off: 'ion-ios-cart-outline'
        }
      },
      {
          title: 'Options',
          icon:
          {
            on: 'ion-ios-gear',
            off: 'ion-ios-gear-outline'
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

    $ionicModal.fromTemplateUrl('templates/add-program.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.showAddCardInformation = function(){
      $scope.modal.showAddCardInformation();
    };

    $scope.hideAddCardInformation = function() {
      $scope.modal.hide();
    };


  });



