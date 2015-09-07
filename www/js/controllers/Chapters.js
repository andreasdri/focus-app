angular.module('focus.controllers')
	.controller('ChaptersController', function($scope, AudioLibrary) {
  	$scope.sounds = AudioLibrary.getAllSounds();
  	$scope.setSound = function(trackNumber) {
  		AudioLibrary.setSound(trackNumber);
  	}
  });