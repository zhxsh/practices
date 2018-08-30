const express = require('express');
const fs = require('fs');

const app = express();

app.use('*',function(req,res,next){
    req.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    req.header('Access-Control-Allow-Methods','GET,POST,PUT,DELELE,OPTIONS');
    next();
})


// 模拟get请求数据，访问 http://localhost:3000/xxxx/info
let info = {};
fs.readFile('json/1info.json',function(err,data){
    if(err)  res.send(err);
    info = JSON.parse(data.toString());
});
app.get('/xxxx/info',(req,res) => {
    res.json(info);
});

// 模拟post请求数据，访问 http://localhost:3000/xxxx/label
let label = {};
fs.readFile('json/2label.json',function(err,data) {
    if(err) res.send(err);
    label = JSON.parse(data.toString());
});
app.post('/xxxx/label',(req,res) => {
    res.json(label);
});

app.listen(3000,() => console.log('listening on port 3000'));
