describe('Controller: child', function() {
  var childController, $rootScope;
  var $scope;

  beforeEach(module('scope-instances'));
  beforeEach(inject(function (_$controller_,_$rootScope_) {

    var $controller = _$controller_;
    $rootScope = _$rootScope_;

    $rootScope.parentCtrl = { value: 42 };
    $scope = $rootScope.$new();

    childController = $controller('four.ChildCtrl', {
      '$scope': $scope
    });

  }));

  it('should get initialized', function() {
    expect(childController).not.toEqual(undefined);
  });

  it('should inherit the scope from it`s parent ', function() {
    childController.parentCtrl = $scope.parentCtrl;
    expect($scope.parentCtrl.value).toEqual(42);
    expect(childController.parentCtrl.value).toEqual(42);
  });

  it('should be able modify the scope on it`s parent', function() {
    childController.parentCtrl.value = 15;

    expect($rootScope.parentCtrl.value).toEqual(15);
    expect($scope.parentCtrl.value).toEqual(15);
  });

});
