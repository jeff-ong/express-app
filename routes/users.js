const express = require('express');
const router = express.Router();
const spotify_util = require('../api/spotify');

router.get('/api/spotify',function(req,res,next){
  const task = req.query.task;
  const query = req.query.query;
  spotify_util(task,query).then((data)=>{
    res.json(data);
  });
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
