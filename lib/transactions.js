module.exports = class Transaction{
  constructor(fromAddress = '', toAddress = '', doNotSell = '', currentLocation = '', lastUpdated = '', timestamp = '', batchId = '', growerId = '', plantsContained = '', batchWeight = '', growerLocation = '', distributorId = '', itemId = '', distributorLocation = '', itemWeight = '', packaging = '', retailerId = '', retailerLocation = '', regulatorWarnings = {}){
    this.fromAddress = fromAddress; //grower, distributor, retailer
    this.toAddress = toAddress; //grower, distributor, retailer
    this.doNotSell = doNotSell; //regulator
    this.currentLocation = currentLocation; //grower, distributor, retailer
    this.lastUpdated = lastUpdated; // regulator, distributor, retailer, grower
    this.timestamp = timestamp; // grower
    this.batchId = batchId; // grower
    this.growerId = growerId; // grower
    this.batchWeight = batchWeight; // grower
    this.growerLocation = growerLocation; // grower
    this.distributorId = distributorId; // distributor
    this.itemId = itemId; // distributor
    this.distributorLocation = distributorLocation; // distributor
    this.itemWeight = itemWeight; // distributor
    this.packaging = packaging; // distributor
    this.retailerId = retailerId; // retailer
    this.retailerLocation = retailerLocation; // retailer
    this.regulatorWarnings = regulatorWarnings; // regulator
  }
};

//growerId, batchId, timestamp, growerLocation, timestamp