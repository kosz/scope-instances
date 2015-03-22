angular.module('scope-instances')
  .filter('valueInfo', function () {
    return function(input) {
      return isNaN(input) ? 'is not a Number' : 'is a Number';
    };
  });
