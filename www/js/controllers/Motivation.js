angular.module('focus.controllers')
	.controller('MotivationController', function($scope, AthleteData) {
  	$scope.athletes = AthleteData.getAthletes();
  });
