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