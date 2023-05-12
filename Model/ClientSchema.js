const mongoose = require('mongoose');
const Schema = mongoose.Schema({
  Name: {type: String},
  UserName: {type: String},
  Email: {type: String},
  SignedStatus: {type: Boolean},
  Role: {type: String},
  PhoneNumber: {type: String}
});
const clients= mongoose.model('Client',Schema);

module.exports =clients
