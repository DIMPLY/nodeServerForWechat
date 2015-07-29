var express = require('express');
//var lessMiddleware = require('less-middleware');
var sha1 = require('sha1');
//var bodyParser = require('body-parser');
var app = express();
//var request = require('request');

//var jsonParser = bodyParser.json();
//var urlencodedParser = bodyParser.urlencoded({extended:false});

//app.use(lessMiddleware(__dirname));
app.use(express.static(__dirname));

app.get('/test',function(req,res){
    //if(!req.query)return res.sendStatus(400);
    var temparr = [req.query.timestamp, req.query.nonce, 'reading_yan'];
    var sigStr = temparr.sort().join('');
    console.log(sigStr);
    if(sha1(sigStr)===req.query.signature)
    res.send(req.query.echostr);
    else res.send('wrong');
});

app.listen(80,function(){
    console.log('Running Express on 80');
});