var dogController = require('./../controllers/dogServerController.js')
// console.log('This is the user object from routes.js file',dog)
module.exports = function(app){
  app.post('/dogServerController/add', function(req, res) {
    dogController.add(req,res);
  })

}

console.log("routes.js is working");
