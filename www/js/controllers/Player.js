angular.module('focus.controllers')
  .controller('PlayerController', function($scope, AudioLibrary) {
  	var media;

    $scope.isPlaying = AudioLibrary.isPlaying;
    $scope.sounds = AudioLibrary.getAllSounds();
    $scope.sound = AudioLibrary.getSound();
    $scope.currentTrack = $scope.sound.trackNumber - 1;

    // Make sure player is updated whenever a new sound is chosen
    $scope.$watch(function() { return AudioLibrary.sound }, function(newVal, oldVal) {
    if (typeof newVal !== 'undefined') {
        $scope.sound = AudioLibrary.sound;
      }
    })

    $scope.$watch(function() { return AudioLibrary.isPlaying }, function(newVal, oldVal) {
    if (typeof newVal !== 'undefined') {
        $scope.isPlaying = AudioLibrary.isPlaying;
      }
    })

    $scope.playOrPause = function() {
      AudioLibrary.playOrPause();
    }

    $scope.next = function() {
      AudioLibrary.next();
    }

    $scope.prev = function() {
      AudioLibrary.prev();
    }

  });
