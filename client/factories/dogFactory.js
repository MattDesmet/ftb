app.factory('dogFactory', ['$http', function($http) {
var factory = {}
  factory.add = function (dogdata) {
    console.log(dogdata.dogtype, 'in the factory add function');
    console.log(dogdata, 'in the factory add function');
    $http.post('/dogServerController/add', dogdata).then(function(output){
      console.log('this happens AFTER the promise');
      console.log(output.data);
    })
  }
console.log('this is inside the factory function.');

return factory;
}]);

console.log('factory is working');
