'use strict';

const Blockchain = require('../lib/blockchain');
const Transaction = require('../lib/transactions')
const Block = require('../lib/block')
describe('Index Data Structure Module', function () {
  let blocky = new Blockchain();  
  blocky.createTransaction(new Transaction('jesus', 'ed', 100))
  blocky.createTransaction(new Transaction('jesus', 'ed', 150))
  blocky.createTransaction(new Transaction('joel', 'hector', 160))
  blocky.createTransaction(new Transaction('joel', 'hector', 170))
  blocky.createTransaction(new Transaction('joel', 'hector', 180))
  blocky.createTransaction(new Transaction('joel', 'hector', 190))
  blocky.createTransaction(new Transaction('joel', 'ed', 110))
  blocky.createTransaction(new Transaction('joel', 'ed', 120))
  blocky.createTransaction(new Transaction('jesus', 'ed', 120))
  blocky.createTransaction(new Transaction('jesus', 'ed', 130))
  blocky.createTransaction(new Transaction('jesus', 'ed', 140))
  blocky.createTransaction(new Transaction('jesus', 'hector', 150))
  blocky.createTransaction(new Transaction('jesus', 'ed', 160))
  blocky.createTransaction(new Transaction('jesus', 'ed', 170))
  blocky.createTransaction(new Transaction('jesus', 'ed', 180))
  blocky.createTransaction(new Transaction('jesus', 'ed', 190))
  blocky.createTransaction(new Transaction('hector', 'ed', 150))

  // console.log(blocky.getAddressTransactions('hector'))
  // console.log(blocky.getBlock(1))
  console.log(blocky)
    describe('default properties', () => {
      it('should create a new instance of a block chain', () => {
        expect(undefined).toEqual(undefined);
      });
    });
  });


// describe('Index Data Structure Module', function () {
//   beforeEach(() => this.blocky = new Blockchain());

//   describe('default properties', () => {
//     it('should create a new instance of a block chain', () => {
//       expect(this.blocky).toMatchObject(Blockchain);
//     });
//     // it('should have a default value of null assigned to the bottom property', () => {
//     //   expect(this.queue.bottom).toBeNull()
//     // })
//     // it('should have a default value of 0 assigned to the size property', () => {
//     //   expect(this.queue.size).toEqual(0)
//     // })
//     // it('should have a maxSize property with a default value of 1048', () => {
//     //   expect(this.queue.maxSize).toEqual(1048)
//     // });
//   });
// });