angular.module('focus.services', [])
.factory('AudioLibrary', function() {
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

    return {
      setSound: function(trackNumber) {
        this.sound = sounds[trackNumber-1];
      },
      getSound: function() {
        return sound;
      },
      getAllSounds: function() {
        return sounds;
      }
    };
  });
