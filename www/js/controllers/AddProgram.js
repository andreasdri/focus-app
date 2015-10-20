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
      if (index == 1){
        $scope.parent.active_1 = 0;
      }
    };

    $scope.parent = {};
    $scope.parent.categories = SoundCategory.getCategories();
    $scope.parent.selected = {};

    // Tracks index of page 1 and 2
    $scope.parent.active = {
      'one': 0,
      'two': 0
    }
    $scope.parent.toggleActive = function(index, page) {
      $scope.parent.active[page] = index;
    };

    $scope.sounds = AudioLibrary.getAllSounds();

    $scope.filterCategory = function() {
      return $scope.parent.categories[$scope.parent.active.one].id;
    }


  });
