let mongoose = require('mongoose');
let validator = require('validator');

let goalSchema = new mongoose.Schema({
  goal: {
    type: String,
    required: true,
    unique: true,
    // validate: (value) => {
    //   return validator.isAlphanumeric(value)
    // }
  }
},{strict: true});

module.exports = mongoose.model('Goal', goalSchema);