'use strict';

const superagent = require('superagent');
const bodyParser = require('body-parser').json();
const calcServer = process.env.CALC_SERVER_ADDRESS;
const Blockchain = require('../lib/blockchain');
const Transaction = require('../lib/transactions');

module.exports = router => {
  router.route('/spike')
    .post(bodyParser, (req, res) => {
      console.log('Passing First Backend');
      console.log('body', req.body);
      superagent.post(`${calcServer}/calc`)
        .send(req.body)
        .then(calcRes => res.sendStatus(calcRes.status));
    })
    .put(bodyParser, (req, res) => {
      console.log('Hit the put route');
      console.log('body', req.body);
      let blocky = new Blockchain()
      // console.log();
      console.log('blocky', blocky);
      // res.send(blocky)
      superagent.post(`${calcServer}/calc`)
        .send(blocky)
        .then(calcRes => res.sendStatus(calcRes.status));
    });
};