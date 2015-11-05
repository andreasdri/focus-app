angular.module('focus.controllers')
	.controller('LibraryController', function($scope, AudioLibrary, AudioPlayer,
     $state, Store) {

    $scope.sounds = AudioLibrary.getAllSounds();
  	$scope.setSound = function(trackNumber) {
  		AudioPlayer.setSound(trackNumber);
  	};
    $scope.play = function() {
      AudioPlayer.play();
    };
    $scope.viewDetails = function(sound) {
      $state.go('main.library.chapterinfo',{'selectedSound': sound });
    };

    $scope.addProgram = function(evt, sound) {
      evt.stopPropagation();
      $state.go('main.mytraining.addprogram',
        {'selectedSound': sound, 'selectedCategory': sound.category, 'addFromLibrary': true}
      );
    }

    $scope.checkTrack = function(trackID) {
      return Store.trackOwned(trackID);
    };

    $scope.purchaseTrack = function (trackID) {
      console.log(trackID)

      Store.purchaseTrack(trackID);
    };
  });
