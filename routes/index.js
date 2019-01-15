const express = require('express');
const app = express();
const router = express.Router();
const request = require('request');
const path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('C:\\Users\\jeff-ong\\express-app/client/index.html');
});

module.exports = router;
