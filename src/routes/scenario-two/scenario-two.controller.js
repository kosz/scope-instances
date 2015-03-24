angular.module('scope-instances').controller('scenario-two', [
  '$scope',
  'two.PrimitiveExample',
  'two.ArrayExample',
  'two.ObjectExample',
  '$tabNavigation',
  '$mdDialog',
  function ($scope,
            $rioPrimitiveExample,
            $rioArrayExample,
            $rioObjectExample,
            $tabNavigation,
            $mdDialog) {

    var self = this;

    self.primitiveExample = $rioPrimitiveExample;
    self.arrayExample = $rioArrayExample;
    self.objectExample = $rioObjectExample;
    self.tabNavigation = $tabNavigation;

    $scope.ngWatServiceFactory = function ($event) {

      $mdDialog.show({
          targetEvent: $event,
          template:
            '<md-dialog>' +
            '  <md-content><img src="/assets/images/service-factory.png" style="width: 100%;"></md-content>' +
            '  <div class="md-actions">' +
            '    <md-button ng-click="closeDialog()">' +
            '      Close' +
            '    </md-button>' +
            '  </div>' +
            '</md-dialog>',
          controller: function ($scope,$mdDialog) {
            $scope.closeDialog = function () {
              $mdDialog.hide();
            };
          }
        });
    };
  }]);
