'use strict';

const Block = require('../lib/block');

describe('Block Module', function() {
  describe('#Block', function() {
    let block = new Block();
    it('should return a block object', function() {
      expect(block).toBeInstanceOf(Block);
    });
    it('should return a hash value', function() {
      expect(block.calculateHash()).toEqual('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
    });
  });
});