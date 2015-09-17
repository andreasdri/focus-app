angular.module('focus.services')
	.factory('AudioPlayer', function(AudioLibrary, $cordovaMedia2) {

		var sounds = AudioLibrary.getAllSounds(); // TODO: Make switching between 'basic' and 'olympic' versions possible
    var sound = sounds[0];
    var media;
    var isPlaying = false;
    var currentTrack = sound.trackNumber - 1;
    var duration = 0;
    var progress = 0;

    return {
      setSound: function(trackNumber) {
        this.sound = sounds[trackNumber-1];
        this.new(this.sound);
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

      new: function(sound) {
        console.log("new media")
        if (media) {
          media.release();
        }
        var src = (ionic.Platform.isAndroid() ? "/android_asset/www/" + sound.src : sound.src);

        media = $cordovaMedia2.newMedia(src);

        this.isPlaying = true;
        currentTrack = sound.trackNumber - 1;

        this.playMedia()

      },

      playOrPause: function() {
        if(media && this.isPlaying) {
          this.isPlaying = false;
          media.pause();
        }
        else if (media && !this.isPlaying) {
          this.isPlaying = true;
          this.playMedia()
        }
      },

      next: function() {
        if (currentTrack == sounds.length - 1) {
          this.sound = sounds[0];
          this.new(sounds[0]);
        }
        else {
          this.sound = sounds[currentTrack + 1];
          this.new(sounds[currentTrack + 1]);
        }

      },

      prev: function() {
        if (currentTrack == 0) {
          this.sound = sounds[sounds.length - 1];
          this.new(sounds[sounds.length - 1]);
        }
        else {
          this.sound = sounds[currentTrack - 1];
          this.new(sounds[currentTrack - 1]);
        }
      },

      seekTo: function(pos) {
        if (!media) return;
        media.seekTo(pos * 1000);
      },

      playMedia: function() {

        media.play().then(function() {
          // success
          console.log('finished playback');
        }, null, function(data) {

          console.log('track progress: ' + data.position);
          progress = data.position;

          if (data.status) {
            console.log('track status change: ' + data.status);
          }
          if (data.duration) {
            console.log('track duration: ' + data.duration);
            duration = data.duration;
          }
        })
      },

      stop: function(){
        if (!media) return;

        if (this.isPlaying) this.isPlaying = false
        media.stop()
      },

      destroy: function() {
        if (angular.isDefined(media)) {
          media.release();
          media = undefined;
          currentTrack = undefined;
        }
      }

    };

	});
