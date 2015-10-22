angular.module('focus.controllers')
	.controller('LibraryController', function($scope, AudioLibrary, AudioPlayer, $state) {
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

  });
