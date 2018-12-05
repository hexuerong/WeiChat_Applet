const https = require('https');
const fs = require('fs');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
 
const app = express();
const rootPath = path.join(__dirname,'../');
// 创建 application/x-www-form-urlencoded 编码解析(post方法)
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const options = {
    key: fs.readFileSync('bin/privatekey.pem'),
    cert: fs.readFileSync('bin/certificate.pem')
};

/* https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
    console.log("应用实例，访问地址为 https://%s:%s", '127.0.0.1','8082');
}).listen(8082);
https.get('https://encrypted.google.com/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
}); */

const httpsServer = https.createServer(options,app);
httpsServer.listen(8082, function() {
    console.log('HTTPS Server is running on: https://127.0.0.1:%s', 8082);
});

app.get('/',(req,res) => {
    // res.send('Hello World');
    res.sendFile( rootPath + "/page_testServer/" + "https.html" );
});
app.get('/testHttps',(req,res) => {
    // 输出 JSON 格式
    let response = {
        "name":req.query.name,
        "password":req.query.password
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
app.post('/process_post', urlencodedParser, function (req, res) {
    // 输出 JSON 格式
    let response = {
        "name":req.body.name,
        "password":req.body.password
    };
    console.log(response);
    res.end(JSON.stringify(response));
});