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

    $scope.numberOfTimesPlayed = function(times) {
      if(!times) {
        return 0;
      }
      return times.reduce(function(time) {
        return time.finished ? 1 : 0;
      });
    };

    $scope.progressPercentage = function(times) {
      return $scope.numberOfTimesPlayed(times) * 100 / times.length;
    }


    TrainingProgram.getPrograms().then(function(result) {
      $scope.programs = result;
    });

    $scope.playProgram = function(program) {
      AudioPlayer.setSound(program.sound.trackNumber);
      AudioPlayer.play();
      $scope.showPlayer();
    };

    $scope.editProgram = function() {
      $scope.selectedProgram.times = TrainingProgram.addTimes(
        $scope.selectedProgram.checked,
        $scope.selectedProgram.frequency,
        $scope.selectedProgram.duration);
      $scope.master = angular.copy($scope.selectedProgram);
      TrainingProgram.updateProgram($scope.selectedProgram, $scope.selectedProgram.id);
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
