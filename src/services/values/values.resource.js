angular.module('scope-instances')
  .factory('$values', [
    function () {

      var self = {};

      self.values = [ {value: 1}, {value:3} ];

      self.addValue = function () {
        self.values.push({value: 42});
      };

      return self;

  }]);
