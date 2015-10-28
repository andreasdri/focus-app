angular.module('focus.controllers')
  .controller('TrainingProgramController', function($scope, $stateParams) {

    $scope.program = $stateParams.program;

  });
