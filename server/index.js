/**
 * Created by He on 2017/5/12.
 * E-mail:408348116@qq.com
 */

// 引入编写好的router
const router = require('./Router');
// 引入文件模块
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
// 引入处理post数据的模块
// 引入Express
const express = require('express');
const app = express();

app.use(router);
// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, '../dist')))
// 因为是单页应用 所有请求都走/dist/index.html
app.get('*', function(req, res) {
  const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
  res.send(html)
})
// 监听8089端口
app.listen(8089);
console.log('Success Listen 8089...');
