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
        title: 'MyTraining',
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
      $scope.playerModal = modal;
    });
    $scope.showPlayer = function() {
      $scope.playerModal.show();
    };
    $scope.hidePlayer = function() {
      $scope.playerModal.hide();
    };

    $ionicModal.fromTemplateUrl('templates/add-program.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.addCardModal = modal;
    });

    $scope.showAddCardInformation = function(){
      $scope.addCardModal.show();
    };

    $scope.hideAddCardInformation = function() {
      $scope.addCardModal.hide();
    };


  });



