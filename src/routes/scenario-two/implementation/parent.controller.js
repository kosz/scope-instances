angular.module('scope-instances')
  .controller('two.ParentCtrl', [
    '$scope',
    'two.SharedValue',
    function($scope, $rioSharedValue) {
      $scope.sharedValue = $rioSharedValue;
    }]);
