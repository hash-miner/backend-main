'use strict';

const mongoose = require('mongoose');

const BlockSchema = mongoose.Schema({
  blocknumber: {type: Number, required: true, unique: true},
  previoushash: {type: String, required: true},
  transactions: [],
  timestamp: {type: Number, required: true},
  hash: {type: String, required: true},
  nonce: {type: String, required: true},
});

module.exports = mongoose.model('block', BlockSchema);
