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

    // needs rewriting
    editProgram: function(program) {
      programs = programs.map(function(oldProgram) {
        if (program.id === oldProgram.id) {
          return program;
        }
      });
    },

    // also needs rewriting
    deleteProgram: function(program) {
      programs = programs.filter(function(oldProgram) {
        if (!program.id === oldProgram.id) {
          return oldProgram;
        }
      });
    },

  };
});
