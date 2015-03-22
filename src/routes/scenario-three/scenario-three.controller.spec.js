describe('Controller: scenario-three', function() {
  var controller, $rootScope;
    

  beforeEach(module('scope-instances')); 
    beforeEach(inject(function (_$controller_,_$rootScope_) { 
    
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        

    controller = $controller('scenario-three', { 
      });
  }));

  it('should get initialized', function() {
    expect(controller).not.toEqual(undefined);
  }); 

});
