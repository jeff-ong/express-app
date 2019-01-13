const express = require('express');
const router = express.Router();
const spotify_util = require('../api/spotify');

router.get('/api/spotify',function(req,res,next){
  const req_arr = {};
  req_arr.task = req.query.task;
  req_arr.query = req.query.query;

  spotify_util(req_arr).then((data)=>{
    res.json(data);
  });
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
