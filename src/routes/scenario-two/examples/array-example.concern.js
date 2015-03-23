angular.module('scope-instances')
  .factory('two.ArrayExample', function () {
    var example = this;

    var arr = [ 1, 2 ],
        bar = arr;

    example.arr = arr;
    example.bar = bar;


    var _arr = arr.slice(0),
        _bar = _arr;

    _arr.push(3);

    example.arr2 = _arr;
    example.bar2 = _bar;

    var __arr = _arr.slice(0),
        __bar = __arr;

    __bar.push(4);

    example.arr3 = __arr;
    example.bar3 = __bar;

    return example;
  });
