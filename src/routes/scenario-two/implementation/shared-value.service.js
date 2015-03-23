/**
 * @ngdoc service
 * @name scope-instances.service:two.SharedValue
 *
 * @description
 * A .value service, which allows sharing a value amongst multiple angular objects.
 *
 *
 * **Example Js Implementation:**
 <pre>
  .controller('MyCtrl', [
    '$scope',
    'two.SharedValue', // inject it into your Angular Object
    function($scope, $rioSharedValue) {
      $scope.sharedValue = $rioSharedValue; // attach it to the scope
    }]);
 </pre>
 *
 * **With coresponding Jade Implementation Example:**
 <pre>
   div(ng-controller="MyCtrl") {{sharedValue.value}}
 </pre>

 */
angular.module('scope-instances')
  .value('two.SharedValue', {

      /**
       * @ngdoc property
       * @name scope-isntances.service:two.SharedValue#value
       * @propertyOf scope-instances.service:two.SharedValue
       *
       * @description
       * A value property which gets shared amongst multiple angular objects.
       */
      value: 42

  });
