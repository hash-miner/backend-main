const Block = require('./lib/block');
const Transaction = require('./lib/transactions');
const Blockchain = require('./lib/blockchain');








let blocky = new Blockchain();
blocky.createTransaction(new Transaction('address1', 'address2', 100));
console.log('valid chain', blocky.isChainValid())
blocky.createTransaction(new Transaction('address2', 'address1', 50));
console.log('\nBalance of Jesus is', blocky.getBalanceOfAddress('jesus'));
blocky.createTransaction(new Transaction('address2', 'address1', 50));
blocky.createTransaction(new Transaction('address2', 'address1', 50));
console.log('\nBalance of Jesus is', blocky.getBalanceOfAddress('jesus'));
blocky.createTransaction(new Transaction('address2', 'address1', 50));
blocky.createTransaction(new Transaction('address2', 'address1', 50));
console.log('\nBalance of Jesus is', blocky.getBalanceOfAddress('jesus'));

// console.log('\n Starting the miner...');
// blocky.minePendingTransactions('xaviers-address');
// console.log('latest block', blocky.getLatestBlock())


// console.log('\n Starting the miner again...');
// blocky.minePendingTransactions('xaviers-address');

console.log('\nBalance of xavier is', blocky.getAddressTransactions('address1'));
console.log('blockchain', blocky)
console.log('blockchain single block: ', blocky.getBlock(1))

