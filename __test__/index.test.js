'use strict';

const Blockchain = require('../lib/blockchain');

describe('Index Data Structure Module', function () {
  beforeEach(() => this.blocky = new Blockchain());

  describe('default properties', () => {
    it('should create a new instance of a block chain', () => {
      expect(this.blocky).toMatchObject(Blockchain);
    });
    // it('should have a default value of null assigned to the bottom property', () => {
    //   expect(this.queue.bottom).toBeNull()
    // })
    // it('should have a default value of 0 assigned to the size property', () => {
    //   expect(this.queue.size).toEqual(0)
    // })
    // it('should have a maxSize property with a default value of 1048', () => {
    //   expect(this.queue.maxSize).toEqual(1048)
    // });
  });
});