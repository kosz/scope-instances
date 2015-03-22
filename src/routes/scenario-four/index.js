angular.module('scope-instances').config([ '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/scenario-four', {
    templateUrl: 'routes/scenario-four/scenario-four.html',
    controller: 'scenario-four',
    controllerAs: 'vm'
  });

}]);
