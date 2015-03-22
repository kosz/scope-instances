angular.module('scope-instances')
  .factory('two.SharedValue', function () {
    return {
      value: 42
    };
  });
