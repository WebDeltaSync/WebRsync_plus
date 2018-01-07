var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WebRsync' });
});

router.get('/',function(req,res,rsync){

})

module.exports = router;
