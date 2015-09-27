angular.module('focus.directives')
	.directive('audioDuration', [function() {
		return {
			restrict: 'E',
			template: '{{duration | duration}}'
		}
	}])

	.directive('audioProgress', [function() {
		return {
			restrict: 'E',
			template: '{{progress | time}}'
		}
	}])
  .directive('audioProgressBar', [function() {
    return {
      restrict: 'E',
      template: '<div class="range range-positive"> \
        <audio-progress></audio-progress> \
        <input type="range" min="0" max="{{duration}}" on-touch="sliderTouched()" ng-model="progress" on-release="sliderRelease()"> \
        <audio-duration></audio-duration> \
      </div>'
    }
  }]);
