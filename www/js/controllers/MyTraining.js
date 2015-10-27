angular.module('focus.controllers')
	.controller('MyTrainingController', function($scope, $ionicPopup,
    TrainingProgram, AudioPlayer) {
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
    });

    $scope.addProgram = function(program) {
        TrainingProgram.addProgram(program).then(function(result) {
        console.log(result.insertId);
        $scope.programs.push(program);
      });
    };

    $scope.playProgram = function(program) {
      AudioPlayer.setSound(program.sound.trackNumber);
      AudioPlayer.play();
      $scope.showPlayer();
    };

    $scope.clearPrograms = function() {
      TrainingProgram.clear();
      $scope.programs = [];
    };

    $scope.editProgram = function() {
      $scope.master = angular.copy($scope.selected);
      TrainingProgram.updateProgram($scope.selected, $scope.selected.id);
      $scope.hideEditProgram();
    };

    $scope.confirmDelete = function(program) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Slett program',
        template: 'Er du sikker på at du vil slette dette programmet fra din trening?',
        cancelText: 'Nei',
        okText: 'Ja',
        okType: 'button-royal'
      });

      confirmPopup.then(function(res) {
        if(res) {
          TrainingProgram.deleteProgram(program.id);
          console.log('Slettet');
        } else {
          console.log('Ikke slettet');
          }
        });
    };
});
