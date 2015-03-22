angular.module('scope-instances')
.controller('ParentCtrl', function($scope) {
  $scope.value = 42;
})
.controller('ChildCtrl', function($scope) {
});
