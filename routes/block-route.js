'use strict';

const superagent = require('superagent');
const bodyParser = require('body-parser').json();
const calcServer = process.env.CALC_SERVER_ADDRESS;
const Blockchain = require('../lib/blockchain');
const Transaction = require('../lib/transactions');
let blocky = new Blockchain();

module.exports = router => {
  router.route('/transactions')
    .put(bodyParser, (req, res) => {
      console.log('Passing First Backend');
      console.log('body', req.body);
      superagent.post(`${calcServer}/calc`)
        .send(req.body)
        .then(calcRes => res.sendStatus(calcRes.status));
    })
    .post(bodyParser, (req, res) => {
      if(req.body){
        blocky.createTransaction(new Transaction(null, req.body.growerId, false, req.body.location, Date.now(), req.body.timestamp,req.body.batchId, req.body.growerId, null, req.body.batchWeight, req.body.growerLocation, req.body.distributorId));
      }
      res.sendStatus(200);
      console.log('Hit the put route');
      // console.log();
      // console.log('blocky :');

      // res.send(blocky)
      // superagent.post(`${calcServer}/calc`)
      //   .send(blocky)
      //   .then(calcRes => res.sendStatus(calcRes.status));
    });
};