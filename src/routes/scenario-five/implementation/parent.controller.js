angular.module('scope-instances')
  .controller('five.ParentCtrl', [
    '$scope',
    function ($scope) {

      $scope.value = 42;

    }]);
