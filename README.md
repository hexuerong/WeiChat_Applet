# WeiChat_Applet

微信小程序

## https服务器

HTTPS使用https协议，默认端口号44；
HTTPS需要向证书授证中心申请证书；
HTTPS服务器与客户端之间传输是经过SSL安全加密后的密文数据；

### 创建公钥、私钥及证书

（1）创建私钥

``` bash
openssl genrsa -out privatekey.pem 1024
```

（2）创建证书签名请求

``` bash
openssl req -new -key privatekey.pem -out certrequest.csr
```

can't open openssl.cnf解决方法:
在cmd命令中执行如下命令即可：`set OPENSSL_CONF=E:\OpenSSL-Win64\bin\openssl.cfg`

（3）获取证书，线上证书需要经过证书授证中心签名的文件；下面只创建一个学习使用证书

``` bash
openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
```

（4）创建pfx文件

``` bash
openssl pkcs12 -export -in certificate.pem -inkey privatekey.pem -out certificate.pfx
```

### HTTPS服务

创建HTTPS服务器同HTTP服务器大致相同，需要增加证书，创建HTTPS服务器时通过options参数设置。

``` js
import https from 'https';
import fs from 'fs';

var pk = fs.readFileSync('privatekey.pem'),
    pc = fs.readFileSync('certificate.pem');
var opts = {
    key: pk,
    cert: pc
};
var server = https.createServer(opts);
```

## nodejs express框架

Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。

使用 Express 可以快速地搭建一个完整功能的网站。

Express 框架核心特性：

- 可以设置中间件来响应 HTTP 请求。

- 定义了路由表用于执行不同的 HTTP 请求动作。

- 可以通过向模板传递参数来动态渲染 HTML 页面。

以下几个重要的模块是需要与 express 框架一起安装的：

- body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。

- cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。

- multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。