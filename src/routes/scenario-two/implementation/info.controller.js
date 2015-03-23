angular.module('scope-instances')
  .controller('two.InfoCtrl', [
    '$scope',
    'two.SharedValue',
    function($scope, $rioSharedValue) {
      $scope.sharedValue = $rioSharedValue;
      $scope.value = 42;
    }]);
