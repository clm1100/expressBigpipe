
var express = require('express');
var router = express.Router();
// const sleep = ms => new Promise(r => setTimeout(r, ms))
function sleep(ms){
  return new Promise(function(resolve,reject){
    setTimeout(resolve,ms)
  })
}
/* GET home page. */
router.get('/', function (req, res) {
  res.type('html');   
  res.write('loading...<br>')
  sleep(3000).then(function(){
    res.write('22222222');
    return sleep(3000)
  }).then(function(){

    res.end("3333")
  })
  
  // return sleep(2000).then(function() {
  //   res.write(`timer: 2000ms<br>`)
  //   return sleep(5000)
  // })
  // .then(function() {
  //   res.write(`timer: 5000ms<br>`)
  // }).then(function() {
  //   res.end()
  // })
});

module.exports = router;
