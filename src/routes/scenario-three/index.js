angular.module('scope-instances').config([ '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/scenario-three', {
    templateUrl: 'routes/scenario-three/scenario-three.html',
    controller: 'scenario-three',
    controllerAs: 'vm'
  });

}]);
