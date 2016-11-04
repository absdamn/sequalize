const router = require('express').Router();
const pry = require('pryjs');

router.get('/', function(req, res) {
  res.render('../views/index.html');
})

module.exports = router;
