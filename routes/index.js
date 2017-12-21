
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' },function(err,str){
    // res.type('html');
    res.write(str)
    
    setTimeout(function(){
      res.write("<h1>33333</h1>") 
      res.end("ok")
    },3000)
  });
});


router.get('/tt', (req, res) => {
  const stream = fs.createReadStream(path.join(__dirname,'1.text'));
  let n =0
  res.write(`<!DOCTYPE html><html><head><title>我是测试的</title></head><body>`)

  stream.on('data', chunk => {
    console.log(++n);
    console.log(chunk.length)
    res.write(chunk)
  })
  

  stream.on('end', () => {
    res.end('</body></html>')
  })
})

module.exports = router;
