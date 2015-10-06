angular.module('focus.controllers')
	.controller('ChaptersController', function($scope, AudioLibrary, AudioPlayer) {
  	$scope.sounds = AudioLibrary.getAllSounds();
  	$scope.setSound = function(trackNumber) {
  		AudioPlayer.setSound(trackNumber);
  	}
    $scope.play = function() {
      AudioPlayer.play();
    }
  });
