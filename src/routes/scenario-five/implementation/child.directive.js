angular.module('scope-instances')
  .directive('rioChild', [
    function () {

      return {
        templateUrl: 'routes/scenario-five/implementation/child.html',
        scope: false,
        replace: true
      };

    }]);
