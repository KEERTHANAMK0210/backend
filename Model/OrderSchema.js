const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  FirstName: {type:String},
  LastName: {type:String},
  OrderID: { type:Number},
  ProductNumber: {type:Number},
  Date: {type: Date}
});

const product = mongoose.model('Order', orderSchema);
module.exports = product;
