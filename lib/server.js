'use strict';

// ----------- Dependencies -----------
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const mongoose = require('mongoose');
// ----------- Environments -----------

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGO_URI;

// ----------- Routes -----------

app.use(cors());
require('../routes/block-route')(router);
require('../routes/auth-route')(router);
app.use(router);

// ----------- Server Controls -----------

const server = module.exports = {};

server.start = () => {
  return new Promise((resolve, reject) => {
    if (server.isOn) return reject(new Error('Server Error: Server Is Already Running'));
    server.http = app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
      server.isOn = true;
      mongoose.connect(MONGODB_URI);
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
      mongoose.disconnect();
      return resolve(server);
    });
  });
};