angular.module('focus.services')
.factory('AudioLibrary', function() {
    var sounds = [
      {
        src: 'sounds/basic/01.mp3',
        id: "basic1",
        title: 'Det er viktig å slappe av',
        trackNumber: 1,
        description: 'Slappe av er viktig i hverdagen.',
        type: 'basic',
        category: 'avslapping'
      }
    ];

    return {
      getAllSounds: function() {
        return sounds;
      },

      getDescriptions: function() {
        return sounds.description;
      }

    };


  });
