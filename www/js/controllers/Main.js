angular.module('focus.controllers')
  .controller('MainController', function($scope, $ionicModal, AudioPlayer, $rootScope, $ionicScrollDelegate) {
    $scope.list = [
      {
        title: 'Min trening',
        url: 'MyTraining',
        icon: {
          on: 'ion-ios-person',
          off: 'ion-ios-person-outline'
        }
      },
      {
        title: 'Bibliotek',
        url: 'Library',
        icon: {
          on: 'ion-ios-book',
          off: 'ion-ios-book-outline'
        }
      },
      {
        title: 'Motivasjon',
        url: 'Motivation',
        icon: {
          on: 'ion-ios-body',
          off: 'ion-ios-body-outline'
        }
      },
      {
        title: 'Innstillinger',
        url: 'Options',
        icon: {
          on: 'ion-ios-gear',
          off: 'ion-ios-gear-outline'
        }
      }
    ];

    $scope.resize = function() {
      $ionicScrollDelegate.resize();
    };

    /* Big Player Modal */
    $scope.mediaPlaying = function() {
      var conditional = (AudioPlayer.getMedia() != null)
      $rootScope.mediaPlaying = conditional;
      if (conditional) {
        $scope.resize();
      }
      return conditional;
    };

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


    /* Edit Program Modal */
    $ionicModal.fromTemplateUrl('templates/edit-program.html', {
      scope: $scope,
      controller: 'MyTrainingController',
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.editProgramModal = modal;
    });

    $scope.showEditProgram = function(program, evt) {
      evt.stopPropagation(); evt.preventDefault();
      $scope.selectedProgram = angular.copy(program);
      $scope.master = angular.copy($scope.selectedProgram);
      $scope.editProgramModal.show();
    };

    $scope.hideEditProgram = function() {
      $scope.editProgramModal.hide();
    };

    $scope.cancelEditProgram = function() {
      $scope.selectedProgram = angular.copy($scope.master);
      $scope.editProgramModal.hide();
    };

    $scope.$on('$destroy', function() {
      $scope.playerModal.remove();
      $scope.editProgramModal.remove();
    });

  });



