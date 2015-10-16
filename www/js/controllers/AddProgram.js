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

    // Tracks index of page 1
    $scope.parent.active = 0;
    $scope.parent.toggleActive = function(index) {
      $scope.parent.active = index;
    };

    // Tracks index of page 2
    $scope.parent.active_1 = 0;
    $scope.parent.toggleActive_1 = function(index) {
      $scope.parent.active_1 = index;
    };

    $scope.sounds = AudioLibrary.getAllSounds();

    $scope.filterCategory = function() {
      switch($scope.parent.active) {
        case 0:
          return $scope.parent.categories[0].id;
          break;
        case 1:
          return $scope.parent.categories[1].id;
          break;
        case 2:
          return $scope.parent.categories[2].id;
          break;
        case 3:
          return $scope.parent.categories[3].id;
          break;
        case 4:
          return $scope.parent.categories[4].id;
          break;
        default:
              return null;
      }
    }


  });
