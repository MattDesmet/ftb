var mongoose = require('mongoose');
var Schema = mongoose.Schema
var DogSchema = new Schema({
  dogtype:{type:String},
  // last_name:{type:String, required:true},
},{timestamps:true})
mongoose.model("the_Dog_Schema",DogSchema);
// convention is 'name of schema' used to reference schema outside of this file
// 2nd param = actual schema in variable.

// console.log('value of DogSchema', DogSchema);
console.log("dogModel is working");


// db.the_dog_schemas.find().pretty()
// db.the_dog_schemas.remove({dogtype:"Lab"})
