angular.module('focus.services')
.factory('TrainingProgram', function() {

  var programs = [];

  return {
    getPrograms: function() {
      return programs;
    },
    addProgram: function(program) {
      programs.push(program);
    },
    editProgram: function(program) {
      programs = programs.map(function(oldProgram) {
        if (program.id === oldProgram.id) { //or some other way of checking the program
          return program;
        }
      });
    },
    deleteProgram: function(program) {
      programs = programs.filter(function(oldProgram) {
        if (!program.id === oldProgram.id) {
          return oldProgram;
        }
      });
    }
  };
});
