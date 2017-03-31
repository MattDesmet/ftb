var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
$routeProvider
  .when('/',{
    templateUrl: 'partials/dogs.html'
    // controller:
    // controllerAs:
  })
  .when('/dogs',{
    templateUrl: 'partials/dogs.html'
    // controller:
    // controllerAs:
  })
  .otherwise({
    redirectTo: '/'
  });
});
