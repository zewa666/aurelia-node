var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api/demo', function(req, res) {
  res.json({ msg: 'From the Node-Backend'});
});

router.get('/', function(req, res) {
  res.redirect('/app/');
});

/* GET welcome view */
router.get('/views/welcome', function(req, res) {
  res.render('welcome', {nodePort: require('../app').get('port')});
});

module.exports = router;
