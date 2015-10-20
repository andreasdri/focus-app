angular.module('focus.directives')
  .directive('miniPlayer', function(AudioPlayer) {
    return {
      templateUrl: 'templates/mini-player.html',
      link: function(scope, element) {
        scope.isPlaying = AudioPlayer.isPlaying;
        scope.sound = AudioPlayer.getSound();

        scope.playOrPause = function() {
            AudioPlayer.playOrPause();
        };

        scope.getMedia = function() {
          return AudioPlayer.getMedia();
        };

        scope.platform = ionic.Platform;

        // Make sure player is updated whenever a new sound is chosen
        scope.$watch(function() { return AudioPlayer.sound }, function(newVal, oldVal) {
          if (typeof newVal !== 'undefined') {
            scope.sound = AudioPlayer.sound;
          }
        });

        scope.$watch(function() { return AudioPlayer.isPlaying }, function(newVal, oldVal) {
          if (typeof newVal !== 'undefined') {
            scope.isPlaying = AudioPlayer.isPlaying;
          }
        });

        scope.$watch(function() { return AudioPlayer.getDuration() }, function(newVal, oldVal) {
          if (typeof newVal !== 'undefined') {
            scope.duration = AudioPlayer.getDuration();
          }
        })

        scope.$watch(function() { return AudioPlayer.getProgress() }, function(newVal, oldVal) {
          if (typeof newVal !== 'undefined') {
            scope.progress = AudioPlayer.getProgress();
          }
        })

      }
    }
  });
