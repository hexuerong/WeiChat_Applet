const express = require('express');
const app = express();

const server = app.listen(8081,'127.0.0.1',function(){
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/onLogin', function (req, res) {
    // res.send(req);
    res.send('---------------------------------------');
    // res.send(res);
    console.log(res);
});