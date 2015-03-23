angular.module('scope-instances')
  .controller('scenario-five', [
    '$values',
    function ($values) {
      var self = this;

      angular.extend(self,$values);

    }]);
