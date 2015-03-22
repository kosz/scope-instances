angular.module('scope-instances')
  .filter('nonNumberQuotes', function () {
    return function(input) {
      return isNaN(input) ? '"' + input + '"' : input;
    };
  });
