angular.module('focus.controllers')
.controller('MyTrainingController', function($scope, $ionicPopup) {

  $scope.exercises = [
    {
      name: "Konkurranseforberedelser",
      date: null,
      time: null,
      reminder: false,
      played: 3,
      goal: 3,
      frequency: 5,
      duration: 2,
      checked: {
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
      }
    },

    {
      name: "Timeout",
      date: "Onsdag",
      time: "21:00",
      reminder: true,
      played: 1,
      goal: 3,
      frequency: 1,
      duration: 3,
      checked: {
        mon: false,
        tue: false,
        wed: true,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
      }
    },

    {
      name: "Mental tøffhet",
      date: null,
      time: null,
      reminder: false,
      played: 0,
      goal: 4,
      frequency: 5,
      duration: 1,
      checked: {
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
      }
    },

    {
      name: "Om å sette seg mål",
      date: "Fredag",
      time: "12:00",
      reminder: true,
      played: 0,
      goal: 2,
      frequency: 3,
      duration: 3,
      checked: {
        mon: false,
        tue: true,
        wed: false,
        thu: false,
        fri: true,
        sat: false,
        sun: true,
      }
    }
  ];

  $scope.confirmDelete = function(exercise) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Slett program',
      template: 'Er du sikker på at du vil slette dette programmet fra din trening?',
      cancelText: 'Nei',
      okText: 'Ja'
    });

    confirmPopup.then(function(res) {
      if(res) {
        $scope.deleteExercise(exercise);
        console.log('Slettet');
      } else {
        console.log('Ikke slettet');
        }
      });
    };

  $scope.deleteExercise = function(exercise) {
    $scope.exercises.splice($scope.exercises.indexOf(exercise), 1);
  };

});
