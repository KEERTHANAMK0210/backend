const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Name: {type: String},
  Email: { type: String},
  DateOfBirth: {type: Date},
  Gender: {type: String},
  Description: {type: String},
  Role: {type: String},
  PhoneNumber: {type: String},
  ProfilePicture: {type: String}
})
const Tm= mongoose.model('TeamMembers', userSchema);
module.exports =Tm
