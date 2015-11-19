angular.module('focus.services')
.factory('AthleteData', function() {
    var athletes = [
      {
        name: "- Ola Nordmann",
        img: "img/ionic.png",
        subtext: "Student",
        quote: "Motivasjon er viktig"
      }
    ];

    return {
      getAthletes: function() {
        return athletes;
      }
    }
  });
