angular.module('focus.controllers')
	.controller('MotivationController', function($scope) {
  	$scope.exercises = [
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
    ]
  });
