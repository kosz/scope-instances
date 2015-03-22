angular.module('scope-instances').config([ '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/scenario-five', {
    templateUrl: 'routes/scenario-five/scenario-five.html',
    controller: 'scenario-five',
    controllerAs: 'vm'
  });

}]);
