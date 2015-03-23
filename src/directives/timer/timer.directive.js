angular.module('scope-instances')
  .directive('timer', [
      'delay',
    function (delay) {

      return {
        controller: [ '$scope', function ($scope) {

          var self = this;

          self.time = 0;

          $scope.$watch(function () { return self.time; }, function () {
            delay(500).then(function () {
              self.time += 500;
            });
          });

        }],
        controllerAs: 'timer',
        templateUrl: 'directives/timer/timer.html',
        restrict: 'E',
        replace: true
      };
    }]);
