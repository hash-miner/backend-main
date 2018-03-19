'use strict';

// ----------- Dependencies -----------
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
// ----------- Environments -----------

const PORT = process.env.PORT;

// ----------- Routes -----------

app.use(cors());
require('../routes/front-route')(router);
app.use(router);

// ----------- Server Controls -----------

const server = module.exports = {};

server.start = () => {
  return new Promise((resolve, reject) => {
    if (server.isOn) return reject(new Error('Server Error: Server Is Already Running'));
    server.http = app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
      server.isOn = true;
      return resolve(server);
    });
  });
};

server.stop = () => {
  return new Promise((resolve, reject) => {
    if (!server.isOn) return reject(new Error('Server Error: Server Is Already Running'));
    server.http.close(() => {
      console.log(`Stopping Server`);
      server.isOn = false;
      return resolve(server);
    });
  });
};