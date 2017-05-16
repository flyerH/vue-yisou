/**
 * Created by He on 2017/4/4.
 * E-mail:408348116@qq.com
 */
let express = require('express')
let router = express.Router()
var fs = require("fs");

router.get('/getdata', function (req, res) {
  data=fs.readFileSync('./server/data.json');
  res.write(data);
  res.end();
})



module.exports = router;
