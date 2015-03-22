angular.module('scope-instances').config([ '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/scenario-one', {
    templateUrl: 'routes/scenario-one/scenario-one.html',
    controller: 'scenario-one',
    controllerAs: 'vm'
  });

}]);
