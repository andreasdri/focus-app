angular.module('focus.directives')
	.directive('audioProgressBar', [function() {
		return {
			restrict: 'E',
			template: '<input type="range" min="0" max="{{duration}}" on-touch="sliderTouched()" ng-model="progress" on- on-release="sliderRelease()">'
		}
	}])

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
	}]);
