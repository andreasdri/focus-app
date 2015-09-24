angular.module('focus.controllers')
  .controller('PlayerController', function($scope, AudioLibrary, AudioPlayer) {
  	var media;

    $scope.isPlaying = AudioPlayer.isPlaying;
    $scope.sounds = AudioLibrary.getAllSounds();
    $scope.sound = AudioPlayer.getSound();
    $scope.currentTrack = $scope.sound.trackNumber - 1;
    $scope.duration = 0;
    $scope.progress = 0;

    // Make sure player is updated whenever a new sound is chosen
    $scope.$watch(function() { return AudioPlayer.sound }, function(newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
        $scope.sound = AudioPlayer.sound;
      }
    })

    $scope.$watch(function() { return AudioPlayer.isPlaying }, function(newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
        $scope.isPlaying = AudioPlayer.isPlaying;
      }
    })

    $scope.$watch(function() { return AudioPlayer.getDuration() }, function(newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
        $scope.duration = AudioPlayer.getDuration();
      }
    })

    $scope.$on('positionChanged', function(event, position) {
      $scope.$apply(function() {
        if (typeof position !== 'undefined') {
          $scope.progress = position;
        }
      });
    })

    $scope.playOrPause = function() {
      AudioPlayer.playOrPause();
    }

    $scope.sliderTouched = function() {
      AudioPlayer.sliderTouched();
    }

    $scope.next = function() {
      AudioPlayer.next();
    }

    $scope.prev = function() {
      AudioPlayer.prev();
    }

    $scope.seekTo = function(pos) {
      AudioPlayer.seekTo(pos);
    }

    $scope.sliderRelease = function() {
      var pos = $scope.progress;
      AudioPlayer.seekTo(pos);
    };

    $scope.$on('destroy', function() {
      AudioPlayer.destroy();
    })

    $scope.stop = function(){
      AudioPlayer.stop()
    }

  });
