angular.module('focus.directives')
  .directive('programFrequency', [function() {
    return {
      restrict: 'E',
      template: '<div class="padding input-inline"> \
      <label>Hyppighet (ganger per uke)</label> \
      <input maxlength="2" type="tel" ng-model="selected.frequency"> \
      </div>'
    };
  }])

  .directive('programDuration', [function() {
    return {
      restrict: 'E',
      template: '<div class="padding input-inline"> \
      <label>Varighet (antall uker)</label> \
      <input maxlength="2" type="tel" ng-model="selected.duration"> \
      </div>'
    };
  }]);
