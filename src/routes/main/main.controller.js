angular.module('scope-instances').controller('main', [
'$mdToast',
function ($mdToast) {

  var self = this;

  self.showSadMessage = function() {
    $mdToast.show(
      $mdToast.simple()
      .content(':(')
      .hideDelay(100)
    );
  };

}]);
