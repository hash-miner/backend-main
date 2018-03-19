module.exports = class Transaction{
  constructor(fromAddress, toAddress, amount, doNotSell = false, currentLocation, lastUpdated, timestamp, batchId, growerId, plantsContained, batchWeight, growerLocation, distributorId, itemId, distributorLocation, itemWeight, packaging, retailerId, retailerLocation, regulatorWarnings){
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
    this.doNotSell = doNotSell;
    this.currentLocation = currentLocation;
    this.lastUpdated = lastUpdated;
    this.originTimestamp = timestamp;
    this.batchId = batchId;
    this.growerId = growerId;
    this.plantsContained = plantsContained;
    this.batchWeight = batchWeight;
    this.growerLocation = growerLocation;
    this.distributorId = distributorId;
    this.itemId = itemId;
    this.distributorLocation = distributorLocation;
    this.itemWeight = itemWeight;
    this.packaging = packaging;
    this.retailerId = retailerId;
    this.retailerLocation = retailerLocation;
    this.regulatorWarnings = regulatorWarnings;
  }
};
