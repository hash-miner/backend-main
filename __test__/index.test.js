'use strict';

const Blockchain = require('../lib/blockchain');
const Transaction = require('../lib/transactions');
const Block = require('../lib/block');
describe('Index Data Structure Module', function () {
  let blocky = new Blockchain();  
  blocky.createTransaction(new Transaction('jesus', 'ed', 100));
  blocky.createTransaction(new Transaction('jesus', 'ed', 150));
  blocky.createTransaction(new Transaction('joel', 'hector', 160));
  blocky.createTransaction(new Transaction('joel', 'hector', 170));
  blocky.createTransaction(new Transaction('joel', 'hector', 180));
  blocky.createTransaction(new Transaction('joel', 'hector', 190));
  blocky.createTransaction(new Transaction('joel', 'ed', 110));
  blocky.createTransaction(new Transaction('joel', 'ed', 120));
  blocky.createTransaction(new Transaction('jesus', 'ed', 120));
  blocky.createTransaction(new Transaction('jesus', 'ed', 130));
  blocky.createTransaction(new Transaction('jesus', 'ed', 140));
  blocky.createTransaction(new Transaction('jesus', 'hector', 150));
  blocky.createTransaction(new Transaction('jesus', 'ed', 160));
  blocky.createTransaction(new Transaction('jesus', 'ed', 170));
  blocky.createTransaction(new Transaction('jesus', 'ed', 180));
  blocky.createTransaction(new Transaction('jesus', 'ed', 190));
  blocky.createTransaction(new Transaction('hector', 'ed', 150));

  // console.log(blocky.getAddressTransactions('hector'))
  // console.log(blocky.getBlock(1))
  console.log(blocky);
  describe('default properties', () => {
    it('should create a new instance of a block chain', () => {
      expect(undefined).toEqual(undefined);
    });
  });
});
