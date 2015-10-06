angular.module('focus.services')
	.factory('AudioPlayer', function(AudioLibrary, $interval, $rootScope) {

		var sounds = AudioLibrary.getAllSounds(); // TODO: Make switching between 'basic' and 'olympic' versions possible
    var sound = sounds[0];
    var media;
    var isPlaying = false;
    var currentTrack = sound.trackNumber - 1;
    var duration = 0;
    var progress = 0;
    var sliderUsed = false;

    var functions = {
      setSound: function(trackNumber) {
        this.sound = sounds[trackNumber-1];
        functions.new(this.sound);
      },

      getSound: function() {
        return sound;
      },

      getDuration: function() {
        return duration;
      },

      getProgress: function() {
        return progress;
      },

      sliderTouched: function() {
        sliderUsed = true;
      },

      /*
      Method that creates a new mediaobject and the callback functions for
      when the track finishes and when it's status changes

       */
      new: function(sound) {

        functions.destroy();

        var src = (ionic.Platform.isAndroid() ? "/android_asset/www/" + sound.src : sound.src);

        media = new Media(src, function () {
          //Success: Code to be run when a soundtrack successfully stops(or finishes)
          console.log("Success");
          $interval.cancel(progressPromise);
        },null, function (mediaStatus){

          //When the
          if(mediaStatus == Media.MEDIA_RUNNING){
            console.log("Running");
          }
          else if(mediaStatus == Media.MEDIA_PAUSED){
            console.log("Paused");
          }
          else if(mediaStatus == Media.MEDIA_STOPPED){
            console.log("Stopped");
            $interval.cancel(progressPromise);
          }


        });

        progressPromise = $interval(function () {
          duration = media.getDuration();
          /*if (progress >= duration-1) {
            functions.next();
          }*/
          // get media position
          media.getCurrentPosition(
            // success callback
            function (position) {
              if (position > -1 && !sliderUsed) {
                progress = position;
                $rootScope.$broadcast('positionChanged', position);
                console.log((position) + " sec");
              }
            },
            // error callback
            function (e) {
              console.log("Error getting pos=" + e);
            }
          );
        }, 1000);


        currentTrack = sound.trackNumber - 1;
      },

      play: function() {
        if (media) {
          this.isPlaying = true;
          media.play();
        }
      },

      /*
      Function that either plays or pauses currently selected track

       */
      playOrPause: function() {
        if(media && this.isPlaying) {
          this.isPlaying = false;
          media.pause();
        }
        else if (media && !this.isPlaying) {
          this.isPlaying = true
          media.play()
        }
      },

      /*
      Play next soundtrack in sound-library

       */
      next: function() {
        if (currentTrack == sounds.length - 1) {
          this.sound = sounds[0];
          functions.new(sounds[0]);
        }
        else {
          this.sound = sounds[currentTrack + 1];
          functions.new(sounds[currentTrack + 1]);
        }

      },

      /*
       Play previous soundtrack in sound-library

       */
      prev: function() {
        if (currentTrack == 0) {
          this.sound = sounds[sounds.length - 1];
          functions.new(sounds[sounds.length - 1]);
        }
        else {
          this.sound = sounds[currentTrack - 1];
          functions.new(sounds[currentTrack - 1]);
        }
      },

      seekTo: function(pos) {
        if (!media) return;
        media.seekTo(pos * 1000)

        sliderUsed = false;
      },

      destroy: function() {
        if (angular.isDefined(media)) {
          media.stop();
          media.release();
          duration = 0;
          progress = 0;
          this.isPlaying = false;
        }
      }

    };

    return functions;

	});
