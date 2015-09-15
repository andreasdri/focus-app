angular.module('focus.filters')
  .filter('time', function() {
    return function(input) {
      if (input >= 0) {

        var t = parseInt(input,10);

        var addLeadingZero = function(n) {
          return (n < 10) ? '0' + n : n;
        };
        return addLeadingZero(Math.floor(t / 60)) + ':' + addLeadingZero(t % 60);
      }
      else {
        return '00:00';
      }
    };
  })

  .filter('duration', ['$filter', function($filter) {
    return function(input) {
      return (input > 0) ? $filter('time')(input) : '00:00';
    }
  }])
