angular.module('focus.controllers')
	.controller('MyTrainingController', function($scope, $ionicPopup,
    TrainingProgram, AudioPlayer, $state) {
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

    $scope.showProgram = function(program) {
      $state.go('main.mytraining.program', {program: program});
    }

    $scope.nextTraining = function(times) {
      if (!times) {
        return '';
      }
      for (var i = 0; i < times.length; i++) {
        var exercise = times[i];

        if (moment(exercise.time) >= moment({hour: 0, minute: 0, seconds: 0, milliseconds: 0})
          && !exercise.finished) {
          return moment(exercise.time).calendar(null, {
            sameDay: '[I dag]',
            nextDay: '[I morgen]',
            nextWeek: 'dddd D. MMMM YYYY'
          });
        }
      }
    };

    $scope.progressPercentage = function(program) {
      return program.played * 100 / program.times.length;
    }


    TrainingProgram.getPrograms().then(function(result) {
      $scope.programs = result;
    });

    $scope.playProgram = function(program) {
      AudioPlayer.setSound(program.sound.trackNumber);
      AudioPlayer.play();

      if (program.played < program.times.length) {
        program.played = program.played + 1;

        if (program.played === program.times.length) {
          program.finished = true;
        }
      }

      TrainingProgram.updateProgram(program, program.id);
      $scope.showPlayer();
    };

    $scope.editProgram = function() {
      $scope.selectedProgram.times = TrainingProgram.addTimes(
        $scope.selectedProgram.checked,
        $scope.selectedProgram.duration);
      $scope.master = angular.copy($scope.selectedProgram);
      TrainingProgram.updateProgram($scope.selectedProgram, $scope.selectedProgram.id);
      $scope.hideEditProgram();
      if ($state.is('main.mytraining.program')) {
        $state.go('main.mytraining.program', {program: $scope.selectedProgram});
      }

    };

    $scope.confirmDelete = function(program, evt) {
      evt.stopPropagation(); evt.preventDefault();
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
