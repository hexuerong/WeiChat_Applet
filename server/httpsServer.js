// import fs from 'fs'
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('bin/privatekey.pem'),
    cert: fs.readFileSync('bin/certificate.pem')
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
    console.log("应用实例，访问地址为 https://%s:%s", '127.0.0.1','8082');
}).listen(8082);

/* https.get('https://encrypted.google.com/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
}); */

https.get('https://127.0.0.1:8082/testHttps',res => {
    console.log(res);
    res.send('测试https\n');
}).on('error', (e) => {
    console.error(e);
});