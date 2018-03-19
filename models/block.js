'use strict';

const mongoose = require('mongoose');

const Block = mongoose.Schema({
  block_number: {type: Number, required: true},
  previous_hash: {type: String, required: true},
  hash: {type: String, required: true},
  transactions: [],
  nonce: {type: Number, required: true},
}, {timestamps: true});

module.exports = mongoose.model('block', Block);
