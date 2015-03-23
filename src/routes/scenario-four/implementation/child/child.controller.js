angular.module('scope-instances').controller(
  'four.ChildCtrl', [
    '$scope',
    function ($scope) {

      var self = this;
      self.parentCtrl = $scope.parentCtrl; 

    }]);
