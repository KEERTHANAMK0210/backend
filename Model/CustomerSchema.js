const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  Name: { type: String},
  Email: {type: String},
  AddressLine1: {type: String},
  AddressLine2:{type: String},
  City: {type: String},
  State: {type: String},
  PinCode: {type: String},
  Country: { type: String},
});

const Customer = mongoose.model('Customer', clientSchema);

module.exports = Customer;
