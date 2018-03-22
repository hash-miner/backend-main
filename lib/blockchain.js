const Block = require('./block');
const superagent = require('superagent');
const calcServer = process.env.CALC_SERVER_ADDRESS;
const BlockSchema = require('../models/block');
const TransactionSchema = require('../models/transaction');

module.exports = class Blockchain{
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2;
    this.pendingTransactions = [];
  }

  createGenesisBlock() {
    return new Block(0,Date.parse('2017-12-23'), [], '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }
  getBlock(n) {
    return this.chain[n];
  }
  minePendingTransactions(){
    console.log('mining block.....');
    let TS = Date.now();
    this.pendingTransactions.map(data =>{
      data.timestamp = TS;
      data.blockNumber = this.chain.length;
    });
    let block = new Block(this.chain.length,TS, this.pendingTransactions, this.getLatestBlock().hash);
    block.mineBlock(this.difficulty);

    console.log('Block successfully mined!');
    this.chain.push(block);
   console.log(block,'block')
    block.transactions.map(ele => {
      let transactionSchema = new TransactionSchema({
        'blockNumber': ele.blockNumber,
        'fromAddress': ele.fromAddress,
        'toAddress': ele.toAddress,
        'doNotSell': ele.doNotSell,
        'currentLocation': ele.currentLocation,
        'lastUpdated': ele.lastUpdated,
        'timestamp': ele.timestamp,
        'batchId': ele.batchId,
        'growerId': ele.growerId,
        'batchWeight': ele.batchWeight,
        'growerLocation': ele.growerLocation,
        'distributorId': ele.distributorId,
        'itemId': ele.itemId,
        'distributorLocation': ele.distributorLocation,
        'itemWeight': ele.itemWeight,
        'packaging': ele.packaging,
        'retailerId': ele.retailerId,
        'retailerLocation': ele.retailerLocation,
        'regulatorWarnings': ele.regulatorWarnings,
      });
      console.log(transactionSchema,'schema')
      transactionSchema.save();
    });

    this.pendingTransactions = [];
    superagent.post(`${calcServer}/calc`)
      .send(block)
      .then(() => console.log('sent....'));

    let blockSchema = new BlockSchema({
      'blocknumber' : block.blocknumber,
      'previoushash': block.previoushash,
      'transactions': block.transactions,
      'timestamp': block.timestamp,
      'hash': block.hash,
      'nonce': block.hash,
    });   

    blockSchema.save();    
  }

  createTransaction(transaction){
    this.pendingTransactions.push(transaction);
    if(this.pendingTransactions.length === 3) this.minePendingTransactions();
  }

  getBalanceOfAddress(address){
    let balance = 0;

    for(const block of this.chain){
      for(const trans of block.transactions){
        if(trans.fromAddress === address){
          balance -= trans.amount;
        }

        if(trans.toAddress === address){
          balance += trans.amount;
        }
      }
    }  
    return balance;
  }
  getAddressTransactions(address){
    let transactions = [];
    for(const block of this.chain){
      for(const trans of block.transactions){
        if(trans.fromAddress === address){
          transactions.push(trans);
        }

        if(trans.toAddress === address){
          transactions.push(trans);
        }
      }
    }
    return transactions;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
};
