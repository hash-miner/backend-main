'use strict';

const superagent = require('superagent');
const bodyParser = require('body-parser').json();
const calcServer = process.env.CALC_SERVER_ADDRESS;

module.exports = router => {
  router.route('/spike')
    .post(bodyParser, (req, res) => {
      console.log('Passing First Backend');
      console.log('body', req.body);
      superagent.post(`${calcServer}/calc`)
        .send(req.body)
        .then(calcRes => res.sendStatus(calcRes.status));
    });
};