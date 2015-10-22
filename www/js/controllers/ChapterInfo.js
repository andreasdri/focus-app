angular.module('focus.controllers')
	.controller('ChapterInfoController', function($scope, $stateParams) {
    $scope.selectedSound = $stateParams.selectedSound;
  });
