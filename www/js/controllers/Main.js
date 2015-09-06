

angular.module('focus.controllers')
  .controller('MainController', function($scope, $cordovaMedia,
    $ionicLoading, $ionicPlatform, AudioLibrary) {

    var media;

    $scope.isPlaying = false;
    $scope.sounds = AudioLibrary.getBasic();
    $scope.currentTrack = 0;

    $ionicPlatform.ready(function() {

      if (ionic.Platform.isIOS() || ionic.Platform.isAndroid()) {

        $scope.playOrPause = function() {
          if(media && $scope.isPlaying) {
            $scope.isPlaying = false;
            media.pause();
          }
          else if (media && !$scope.isPlaying) {
            $scope.isPlaying = true;
            media.play();
          }

        }
        $scope.new = function(sound) {
          if (media) {
            media.release();
          }
          var src = (ionic.Platform.isAndroid() ? "/android_asset/www/" + sound.src : sound.src);

          media = $cordovaMedia.newMedia(src);
          media.play();

          $scope.isPlaying = true;
          $scope.currentTrack = sound.trackNumber - 1;

        }

        $scope.next = function() {
          $scope.new($scope.sounds[$scope.currentTrack + 1]);
        }

        $scope.prev = function() {
          $scope.new($scope.sounds[$scope.currentTrack - 1]);
        }
      }

    });

  });
