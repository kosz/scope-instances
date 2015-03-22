angular.module('scope-instances')
  .factory('two.PrimitiveExample', function () {
    var example = this;

    var a = 1;
    var b = a;

    example.a1 = a;
    example.b1 = b;

    a = 2;

    example.a2 = a;
    example.b2 = b;

    return example;
  });
