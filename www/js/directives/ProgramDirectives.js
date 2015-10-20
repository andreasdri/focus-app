angular.module('focus.directives')
  .directive('programFrequency', [function() {
    return {
      restrict: 'E',
      template: '<div class="padding input-inline"> \
      <label>Hyppighet (ganger per uke)</label> \
      <input maxlength="2" type="number" value="{{selected.frequency}}"> \
      </div>'
    };
  }])

  .directive('programDuration', [function() {
    return {
      restrict: 'E',
      template: '<div class="padding input-inline"> \
      <label>Varighet (antall uker)</label> \
      <input maxlength="2" type="number" value="{{selected.duration}}"> \
      </div>'
    };
  }]);
