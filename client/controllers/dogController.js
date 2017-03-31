app.controller('dogController', function($scope, dogFactory) {
  $scope.add = function(){
    dogFactory.add($scope.newDog);
  }
 console.log("this is inside the controller function");

})

console.log('controller is working');
