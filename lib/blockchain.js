const Block = require('./block');
const Transaction = require('./transactions');

module.exports = class Blockchain{
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2;
    this.pendingTransactions = [];
    this.miningReward = 50;
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
  minePendingTransactions(miningRewardAddress){
    console.log('mining block.....');
    let TS = Date.now();
    let pending = this.pendingTransactions.map(data =>{ 
      data.timestamp = TS;
      data.blockNumber = this.chain.length;
    });
    let block = new Block(this.chain.length,TS, this.pendingTransactions, this.getLatestBlock().hash);
    block.mineBlock(this.difficulty);

    console.log('Block successfully mined!');
    this.chain.push(block);

    this.pendingTransactions = [
      new Transaction(null, miningRewardAddress, this.miningReward),
    ];
  }

  createTransaction(transaction){
    this.pendingTransactions.push(transaction);
    if(this.pendingTransactions.length === 3) this.minePendingTransactions('jesus');
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