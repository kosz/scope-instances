angular.module('scope-instances')
  .controller('scenario-four', [
    '$tabNavigation',
    '$values',
    function ($tabNavigation,$values) {

      var self = this;

      self.tabNavigation = $tabNavigation;
      angular.extend(self,$values);

  }]);
