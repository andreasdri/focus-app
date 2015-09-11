angular.module('focus.services')
.factory('AudioLibrary', function($cordovaMedia2) {
    var basic = [
      {
        src: 'sounds/basic/01.mp3',
        title: 'Kunsten å slappe av!',
        trackNumber: 1,
        description: 'En kortversjon av progressiv...',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/02.mp3',
        title: 'Om å sette seg mål',
        trackNumber: 2,
        description: 'En kortversjon av progressiv...',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/03.mp3',
        title: 'Den jeg er / Meg',
        trackNumber: 3,
        description: 'En kortversjon av progressiv...',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/04.mp3',
        title: 'Mental tøffhet',
        subtitle: '- kunsten å takle forstyrrelser!',
        trackNumber: 4,
        description: 'En kortversjon av progressiv...',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/05.mp3',
        title: 'Time-out',
        subtitle: '- en pust i hverdagen, oppmerksomhetstrening',
        trackNumber: 5,
        description: 'En kortversjon av progressiv...',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/06.mp3',
        title: 'Instrumental',
        trackNumber: 6,
        description: 'En kortversjon av progressiv...',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/07.mp3',
        title: 'Konkurranseforberedelser',
        trackNumber: 7,
        description: 'En kortversjon av progressiv...',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/08.mp3',
        title: 'Nullstille',
        trackNumber: 8,
        description: 'En kortversjon av progressiv...',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/09.mp3',
        title: 'Visualisering',
        trackNumber: 9,
        description: 'En kortversjon av progressiv...',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/10.mp3',
        title: 'Søvn',
        trackNumber: 10,
        description: 'En kortversjon av progressiv...',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/11.mp3',
        title: 'Instrumental - post søvn',
        trackNumber: 11,
        description: 'En kortversjon av progressiv...',
        art: 'img/ionic.png'
      }
    ];

    var sounds = basic; // TODO: Make switching between 'basic' and 'olympic' versions possible
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

      getAllSounds: function() {
        return sounds;
      },

      getDuration: function() {
        return duration;
      },

      getProgress: function() {
        return progress;
      },

      new: function(sound) {
        if (media) {
          media.release();
        }
        var src = (ionic.Platform.isAndroid() ? "/android_asset/www/" + sound.src : sound.src);

        media = $cordovaMedia2.newMedia(src);

        this.isPlaying = true;
        currentTrack = sound.trackNumber - 1;

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

      playOrPause: function() {
        if(media && this.isPlaying) {
          this.isPlaying = false;
          media.pause();
        }
        else if (media && !this.isPlaying) {
          this.isPlaying = true;
          media.play();
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

      destroy: function() {
        if (angular.isDefined(media)) {
          media.release();
          media = undefined;
          currentTrack = undefined;
        }
      }

    };
  });
