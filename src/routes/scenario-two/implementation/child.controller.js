angular.module('scope-instances')
  .controller('two.ChildCtrl', [
    '$scope',
    'two.SharedValue',
    function($scope, $rioSharedValue) {
      $scope.sharedValue = $rioSharedValue;
    }]);
