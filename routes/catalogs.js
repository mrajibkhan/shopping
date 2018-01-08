var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();
var usersFilePath = path.join(__dirname, '../data/catalog.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  var readable = fs.createReadStream(usersFilePath);
  readable.pipe(res);
});

module.exports = router;
