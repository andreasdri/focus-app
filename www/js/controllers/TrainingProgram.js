angular.module('focus.controllers')
  .controller('TrainingProgramController', function($scope, $stateParams, TrainingProgram, AudioPlayer,
    $ionicPopup, $state, $ionicScrollDelegate) {

    /*TrainingProgram.getProgram($stateParams.program.id).then(function(result) {
      $scope.program = result[0];
    });*/

    $scope.program = $stateParams.program;

    $scope.toggleProgramInfo = function() {
      $scope.showProgramInfo = !$scope.showProgramInfo;
    };

    $scope.toggleTrainingDates = function() {
      $scope.showTrainingDates = !$scope.showTrainingDates;
      $ionicScrollDelegate.resize();
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
          $state.go('main.mytraining');
        } else {
          console.log('Ikke slettet');
          }
        });
    };

    $scope.playProgram = function(program) {
      AudioPlayer.setSound(program.sound.trackNumber);
      AudioPlayer.play();
    };

    $scope.nextTraining = function(exercise) {
      if (moment(exercise.time) >= moment({hour: 0, minute: 0, seconds: 0, milliseconds: 0})
        && !exercise.finished && moment(exercise.time).isBefore(moment().add(7,'day'))) {
          return moment(exercise.time).calendar(null, {
            sameDay: '[I dag]',
            nextDay: '[I morgen]',
            nextWeek: 'dddd',
            sameElse: '[neste ]dddd'
          });
        }
    };

    $scope.futureTraining = function(exercise) {
      if (moment(exercise.time).isAfter(moment().add(7,'day'))) {
        return moment(exercise.time).calendar(null, {
          sameElse: 'dddd D. MMM YYYY'
        });
      }
    };
  });
