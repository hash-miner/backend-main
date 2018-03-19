'use strict';

const Block = require('../lib/block');

describe('Block Module', function() {
  describe('#Block', function() {
    let block = new Block();
    it('should return a block object', function() {
      expect(block).toBeInstanceOf(Block);
    });
    it('should return a hash value', function() {
      expect(block.calculateHash()).toEqual('247c4e2d7dc0bfe13d4d16f410fb09166b456b9b8a86f227716f668dbf92d7b1');
    });
    it('should return undefined as method uses default return', function() {
      expect(block.mineBlock(2)).toEqual(undefined);
    });
  });
});