angular.module('focus.controllers')
  .controller('AddProgramController', function($scope, $ionicSlideBoxDelegate,
      SoundCategory, AudioLibrary) {
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };
    // Called each time the slide changes
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
    $scope.parent = {};

    $scope.parent.categories = SoundCategory.getCategories();
    $scope.parent.active = 0;
    $scope.parent.toggleActive = function(index) {
      $scope.parent.active = index;
    };

    $scope.sounds = AudioLibrary.getAllSounds();


  });
