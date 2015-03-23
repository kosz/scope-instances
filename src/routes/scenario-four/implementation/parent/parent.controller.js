angular.module('scope-instances').controller('four.ParentCtrl', [
  '$scope',
  function ($scope) {

    var self = this;
    self.value = 42;

  }]);
