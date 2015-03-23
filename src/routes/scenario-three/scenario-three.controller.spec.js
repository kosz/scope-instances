describe('Controller: scenario-three', function() {
  var $controller, $scope, controller, $rootScope;


  beforeEach(module('scope-instances'));
  beforeEach(inject(function (_$controller_,_$rootScope_) {

    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();

    controller = $controller('scenario-three', {
      '$scope': $scope
    });
  }));

  it('should get initialized', function() {
    expect(controller).not.toEqual(undefined);
  });

});
