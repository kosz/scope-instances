angular.module('scope-instances').config([ '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/scenario-two', {
    templateUrl: 'routes/scenario-two/scenario-two.html',
    controller: 'scenario-two',
    controllerAs: 'vm'
  });

}]);
