describe('Service: two.SharedValue', function () {

  var $rioSharedValue; 

  beforeEach(module('scope-instances')); 
  beforeEach(inject(['two.SharedValue',  function (_$rioSharedValue_) { 
    $rioSharedValue = _$rioSharedValue_;
  }]));

  it('should get initialized', function() {
    expect($rioSharedValue).not.toEqual(undefined);
  }); 

  it('should expose a value attribute which defaults to 42', function () {
    expect($rioSharedValue.value).not.toBeUndefined();
    expect($rioSharedValue.value).toEqual(42);
  });

  it('can allows multiple controllers to share it`s properties', function () {
    
    var $controller, parentCtrl, childCtrl, infoCtrl;

    inject(['$controller', '$rootScope', function (_$controller_, $rootScope) {

      $controller = _$controller_;

      var $parentCtrlScope = $rootScope.$new();
      parentCtrl = $controller('two.ParentCtrl', {
        '$scope': $parentCtrlScope
      });

      var $childCtrlScope = $rootScope.$new();
      childCtrl = $controller('two.ChildCtrl', {
        '$scope': $childCtrlScope
      });

      var $infoCtrlScope = $rootScope.$new();
      infoCtrl = $controller('two.InfoCtrl', {
        '$scope': $infoCtrlScope
      });

      expect($infoCtrlScope.sharedValue.value).toEqual($rioSharedValue.value);
      expect($parentCtrlScope.sharedValue.value).toEqual($rioSharedValue.value);
      expect($childCtrlScope.sharedValue.value).toEqual($rioSharedValue.value);

      $rioSharedValue.value = 5;

      expect($infoCtrlScope.sharedValue.value).toEqual(5);
      expect($parentCtrlScope.sharedValue.value).toEqual(5);
      expect($childCtrlScope.sharedValue.value).toEqual(5);

      $infoCtrlScope.sharedValue.value = 3;

      expect($rioSharedValue.value).toEqual(3);
      expect($parentCtrlScope.sharedValue.value).toEqual(3);
      expect($childCtrlScope.sharedValue.value).toEqual(3);


    }]);

  });

});
