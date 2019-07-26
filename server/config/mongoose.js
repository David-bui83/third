const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const autoIncrement = require('mongoose-auto-increment');


mongoose.connect('mongodb://localhost/managers',{useNewUrlParser:true});
const modelPath = path.join(__dirname,'./../models');
fs.readdirSync(modelPath).forEach(file=>{
  require(modelPath + '/' + file);
});