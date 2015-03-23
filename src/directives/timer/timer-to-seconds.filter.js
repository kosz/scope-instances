angular.module('scope-instances')
  .filter('timerToSeconds', function () {
    return function(input) {
      return Math.ceil(input / 1000);
    };
  });
