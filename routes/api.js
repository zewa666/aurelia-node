var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api/demo', function(req, res) {
  res.json({ msg: 'From the Node-Backend'});
});

module.exports = router;
