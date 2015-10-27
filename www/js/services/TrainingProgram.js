angular.module('focus.services')
.factory('TrainingProgram', function(ngdb) {
  var programsRepository = ngdb.getRepository('newPrograms');

  return {

    getPrograms: function() {
      return programsRepository.get();
    },

    addProgram: function(program) {
      return programsRepository.add(program);
    },

    clear: function() {
      programsRepository.delete();
    },

    updateProgram: function(program, id) {
      programsRepository.setBy({'id': id}).getOne;
      return programsRepository.update(program);
    },

    deleteProgram: function(id) {
      programsRepository.setBy({'id': id}).getOne;
      return programsRepository.delete();
    },

    addTimes: function(checked, frequency, duration) {
      var days = {
        'mon': 'mandag',
        'tue': 'tirsdag',
        'wed': 'onsdag',
        'thu': 'torsdag',
        'fri': 'fredag',
        'sat': 'lørdag',
        'sun': 'søndag'
      };

      var times = [];

      for (var i = 0; i < duration; i++) {
        for (var day in checked) {

          // If the day in the current week is checked
          if (checked.hasOwnProperty(day) && checked[day]) {

            var time;
            var day = moment().startOf('week').day(days[day]);

            // If the day this week has passed, push a date to a new week at the end
            if (i == 0 && moment().date() > day.date()) {
              time = day.add(duration * 7, 'days');
            }

            else {
              // Add a week
              time = day.add(i * 7, 'days');
            }
            times.push({
              time: time,
              finished: false
            });

          }
        }
      }

      return times.sort(function(a, b) {
        return a.unix() - b.unix();
      });


    }

  };
});
