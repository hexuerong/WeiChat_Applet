const express = require('express');
const fs = require('fs');
const path = require('path');
const multer  = require('multer');
const bodyParser = require('body-parser');

const app = express();
const rootPath = path.join(__dirname,'../');

app.use(multer({ dest: '/tmp/'}).array('image'));//上传文件
app.use(bodyParser.urlencoded({ extended: false }));

const server = app.listen(8081,'127.0.0.1',function(){
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});

app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/page_testServer/http.html', function (req, res) {//返回页面
    res.sendFile( rootPath + "/page_testServer/" + "http.html" );
});

app.get('/onLogin', function (req, res) {
    // 输出 JSON 格式
    let response = {
        "name":req.query.name,
        "password":req.query.password
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/file_upload', function (req, res) {
 
    console.log(req.files[0]);  // 上传的文件信息
  
    let des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
         fs.writeFile(des_file, data, function (err) {
          if( err ){
               console.log( err );
          }else{
                response = {
                    message:'File uploaded successfully', 
                    filename:req.files[0].originalname
               };
           }
           console.log( response );
           res.end( JSON.stringify( response ) );
        });
    });
});