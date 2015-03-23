angular.module('scope-instances')
  .factory ('delay', ['$timeout', function ($timeout) {
    return function (ms) { return $timeout(ms); };
  }]);
