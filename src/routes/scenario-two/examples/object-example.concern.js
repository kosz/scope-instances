angular.module('scope-instances')
  .factory('two.ObjectExample', function () {
    var example = this;

    var x = { active: true };
    var y = x;

    y.active = false;

    example.x = x;
    example.y = y;

    return example;
  });
