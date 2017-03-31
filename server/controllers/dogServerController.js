var mongoose = require('mongoose');
var Dog = mongoose.model('the_Dog_Schema')
module.exports = (function(){
    return{
      add: function(req,res){
        var newdog = new Dog(req.body)
        console.log('Value of "req.body.dogtype: "', req.body.dogtype, 'in backend controller')
        console.log(newdog, 'is value of "newdog" in backend controller')
        newdog.save(function(err, output){
          console.log('This is value of OUTPUT object in Server Controller',output);
          if(err){
            console.log(err);
          }else{
            res.json(output)
          }
        })
      }
    }
})()

console.log('dogServerController is working');
