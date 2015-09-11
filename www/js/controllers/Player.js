angular.module('focus.controllers')
  .controller('PlayerController', function($scope, AudioLibrary, $interval) {
  	var media;

    $scope.isPlaying = AudioLibrary.isPlaying;
    $scope.sounds = AudioLibrary.getAllSounds();
    $scope.sound = AudioLibrary.getSound();
    $scope.currentTrack = $scope.sound.trackNumber - 1;
    $scope.duration = 0;
    $scope.progress = 0;

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

    $scope.$watch(function() { return AudioLibrary.getDuration() }, function(newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
        $scope.duration = AudioLibrary.getDuration();
      }
    })

    $scope.$watch(function() { return AudioLibrary.getProgress() }, function(newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
        $scope.progress = AudioLibrary.getProgress();
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

    $scope.seekTo = function(pos) {
      AudioLibrary.seekTo(pos);
    }

    $scope.sliderRelease = function() {
      var pos = $scope.progress;
      AudioLibrary.seekTo(pos);
    };

    $scope.$on('destroy', function() {
      AudioLibrary.destroy();
    })

  });
