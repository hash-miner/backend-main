'use strict';

const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
  fromAdress: {type: String},
  toAddress: {type: String},
  doNotSell: {type: String},
  currentLocation: {type: String},
  lastUpdated: {type: String},
  originTimestamp: {type: String},
  batchId: {type: String},
  growerId: {type: String},
  batchWeight: {type: String},
  growerLocation: {type: String},
  distributorId: {type: String},
  itemId: {type: String},
  distributorLocation: {type: String},
  itemWeight: {type: String},
  packaging: {type: String},
  retailerId: {type: String},
  retailerLocation: {type: String},
  regulatorWarnings: {type: String},
});

module.exports = mongoose.model('transactionSchema', TransactionSchema);
