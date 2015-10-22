angular.module('focus.controllers')
	.controller('MyTrainingController', function($scope, TrainingProgram) {
    $scope.programs = [];
    /*$scope.exercises = [
      {
        name: "Konkurranseforberedelser",
        date: null,
        time: null,
        completed: true,
        reminder: false,
        played: 3,
        goal: 3
      },

      {
        name: "Timeout",
        date: "onsdag",
        time: "21:00",
        completed: false,
        reminder: true,
        played: 1,
        goal: 3
      },

      {
        name: "Mental tøffhet",
        date: null,
        time: null,
        completed: false,
        reminder: false,
        played: 0,
        goal: 4
      },

      {
        name: "Om å sette seg mål",
        date: "fredag",
        time: "12:00",
        completed: false,
        reminder: true,
        played: 0,
        goal: 2
      }
    ]*/



  // section for testing ng-database

  $scope.exampleProgram = {
    name: "et fint program",
    reminder: false,
    times: [],
    played: 1,
    duration: 3,
    frequency: 3,
    completed: false,
    checked: {
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
    }
  };

  $scope.getPrograms = function() {
    TrainingProgram.getPrograms().then(function(result) {
      $scope.programs = result;
    });
  };

  $scope.addProgram = function(program) {
      TrainingProgram.addProgram(program).then(function(result) {
      console.log(result.insertId);
      $scope.programs.push(program);
    });
  };

  $scope.clearPrograms = function() {
    TrainingProgram.clear();
    $scope.programs = [];
  };

});
