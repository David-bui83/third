const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/managers");
 
autoIncrement.initialize(connection);
const managersSchema = new mongoose.Schema({
  p_id:{type:Number},
  name:{type:String,required:[true,'Name cannot be empty'],minlength:[3,'Name, must be a minimum of 3 characters']},
  qty:{type:Number,required:[true,'Quantity must be at least 0'], min:[0,'Qunatity cannot go below zero'],},
  price:{type:Number,required:[true,'Quantity must be at least 0'], min:[0,'Cannot have a negative price'],},
},{timestamps:true});
managersSchema.plugin(autoIncrement.plugin,{model:'Managers',field:'p_id',startAt:1});
mongoose.model('Managers',managersSchema);