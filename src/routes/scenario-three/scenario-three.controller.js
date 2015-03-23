angular.module('scope-instances')
  .controller('scenario-three', [
    '$scope',
    function ($scope) {
    }])
  .controller('three.ParentCtrl', [
   '$scope',
    function ($scope) {
      $scope.value = 42;
    }])
  .controller('three.ChildCtrl', [
   '$scope',
    function ($scope) {
      $scope.value = $scope.$parent.value;
    }]);
