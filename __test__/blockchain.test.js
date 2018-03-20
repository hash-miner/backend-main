'use strict';

const Blockchain = require('../lib/blockchain');

describe('Blockchain Module', function() {
  describe('#Blockchain', function() {
    let blockchain = new Blockchain();
    it('should return a block chain object', function() {
      expect(blockchain).toBeInstanceOf(Blockchain);
    });
    it('should return a genisis block', function() {
      expect(blockchain.createGenesisBlock()).toEqual({'blockNumber': 0, 'hash': 'f95df6ba624c2aa922ea75ed59bd6cae34ee2f2d9eee57acd2f37c441b09cc02', 'nonce': 0, 'previousHash': '0', 'timestamp': 1513987200000, 'transactions': []});
    });
    it('should return the last block which is genesis block', function() {
      expect(blockchain.getLatestBlock()).toEqual({'blockNumber': 0, 'hash': 'f95df6ba624c2aa922ea75ed59bd6cae34ee2f2d9eee57acd2f37c441b09cc02', 'nonce': 0, 'previousHash': '0', 'timestamp': 1513987200000, 'transactions': []});
    });
    it('should return', function() {
      expect(blockchain.minePendingTransactions('ed')).toEqual(undefined);
    });
    it('should return balance of 0', function() {
      expect(blockchain.getBalanceOfAddress()).toEqual(0);
    });
    it('should return empty array', function() {
      expect(blockchain.getAddressTransactions()).toEqual([]);
    });
    it('should return true', function() {
      expect(blockchain.isChainValid()).toEqual(true);
    });
  });
});