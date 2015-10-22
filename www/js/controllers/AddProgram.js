angular.module('focus.controllers')
  .controller('AddProgramController', function($scope, $ionicSlideBoxDelegate,
      SoundCategory, AudioLibrary, $stateParams, soundsByCategoryFilter, $timeout) {

    var getCategory = function(cat) {
      for(var i = 0; i < $scope.categories.length; i++) {
        if ($scope.categories[i].id == cat) {
          $timeout(function() {
            $ionicSlideBoxDelegate.$getByHandle('program').slide(1);
          }, 200);
          return $scope.categories[i];
        }
      }
      return null;
    }

    var allSounds = AudioLibrary.getAllSounds();
    $scope.categories = SoundCategory.getCategories();
    $scope.selectedSound = $stateParams.selectedSound || allSounds[0];
    $scope.selectedCategory = getCategory($stateParams.selectedCategory) || $scope.categories[0];

    $scope.sounds = soundsByCategoryFilter(allSounds, $scope.selectedCategory);

    $scope.toggleActiveCategory = function(category) {
      $scope.selectedCategory = category;
      $scope.sounds = soundsByCategoryFilter(allSounds, $scope.selectedCategory);
      $scope.selectedSound = $scope.sounds[0];
    };

    $scope.toggleActiveSound = function(sound) {
      $scope.selectedSound = sound;
    };

  })
  .filter('soundsByCategory', function() {
    return function(sounds, category) {
      return sounds.filter(function(sound) {
        return sound.category === category.id;
      });
    };
  });
