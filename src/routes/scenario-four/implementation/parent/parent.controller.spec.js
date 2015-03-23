describe('Controller: four.ParentCtrl', function() {
  var parentController, $rootScope, $scope, $controller;

  beforeEach(module('scope-instances'));
  beforeEach(inject(function (_$controller_,_$rootScope_) {

    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();

    parentController = $controller('four.ParentCtrl', {
      '$scope': $scope
    });
  }));

  it('should get initialized', function() {
    expect(parentController).not.toEqual(undefined);
  });

  it('should expose a property called value which defaults to 42', function() {
    expect(parentController.value).toEqual(42);
  });

  it('should have it`s own unique value, not shared with other of it`s instances', function() {

    var $anotherScope = $rootScope.$new(),
        anotherParentController = $controller('four.ParentCtrl', {
          '$scope': $anotherScope
        });

    expect(parentController.value).toEqual(42);
    expect(anotherParentController.value).toEqual(42);

    parentController.value = 15;
    anotherParentController.value = 20;

    expect(parentController.value).toEqual(15);
    expect(anotherParentController.value).toEqual(20);

  });

});
