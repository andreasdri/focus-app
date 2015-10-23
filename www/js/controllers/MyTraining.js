angular.module('focus.controllers')
	.controller('MyTrainingController', function($scope, $ionicPopup, TrainingProgram) {
    $scope.programs = [];

    // section for testing ng-database

    $scope.exampleProgram = {
      name: "Eksempelprogram",
      reminder: false,
      times: [],
      played: 1,
      duration: 3,
      frequency: 3,
      completed: false,
      checked: {
        mon: false,
        tue: true,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
      }
    };

    TrainingProgram.getPrograms().then(function(result) {
      $scope.programs = result;
      $scope.programs.push($scope.exampleProgram);
    });

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

    $scope.confirmDelete = function(exercise) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Slett program',
        template: 'Er du sikker på at du vil slette dette programmet fra din trening?',
        cancelText: 'Nei',
        okText: 'Ja'
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('Slettet');
        } else {
          console.log('Ikke slettet');
          }
        });
    };
});
