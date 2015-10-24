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
    }

  };
});
