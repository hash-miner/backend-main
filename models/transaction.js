'use strict';

const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
  blockNumber: {type: String , default: ''},
  fromAdress: {type: String, default: ''},
  toAddress: {type: String, default: ''},
  doNotSell: {type: String, default: ''},
  currentLocation: {type: String, default: ''},
  lastUpdated: {type: String, default: ''},
  originTimestamp: {type: String, default: ''},
  batchId: {type: String, default: ''},
  growerId: {type: String, default: ''},
  batchWeight: {type: String, default: ''},
  growerLocation: {type: String, default: ''},
  distributorId: {type: String, default: ''},
  itemId: {type: String, default: ''},
  distributorLocation: {type: String, default: ''},
  itemWeight: {type: String, default: ''},
  packaging: {type: String, default: ''},
  retailerId: {type: String, default: ''},
  retailerLocation: {type: String, default: ''},
  regulatorWarnings: {type: String, default: ''},
});

module.exports = mongoose.model('transactionSchema', TransactionSchema);
