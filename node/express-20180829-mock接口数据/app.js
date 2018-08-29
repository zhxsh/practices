const express = require('express');
const fs = require('fs');

const app = express();

let community = {};
fs.readFile('json/1groupcommunityinfo.json',function(err,data){
    if(err)  res.send(err);
    // const b = JSON.parse(data.toString());
    community = JSON.parse(data.toString());
});

app.get('/',(req,res) => res.send('hello word!'));
app.get('/as',(req,res) => res.send('asasas'));
app.get('/j',(req,res) => {
    fs.readFile('json/1.json',function(err,data){
        if(err){
            res.send(err);
        }
        res.send("读取:"+data.toString());
    })
});

app.get('/mining/analysis/community/groupcommunityinfo',(req,res) => {
    console.log("community");
    // res.json(JSON.parse(community.toString()));
    const a = {
        data: community.data,
        errCode: 0
    }
    // res.json(a);
    res.send(JSON.stringify(community));
})

// app.post('/p',(req,res) => {
//     fs.readFile('json/1.json',function(err,data){
//         if(err){
//             res.send(err);
//         }
//         res.json(JSON.parse(data.toString()));
//     })
// });

app.use(function(req,res,next){
    res.writeHead(200,{"Content-Type":"application/json;charset=utf-8" });
    res.status(404).send('oops...');
})

app.listen(3000,() => console.log('listening on port 3000'));



var util = {
    removeStringSlash: function(str){
        console.log("str:",str);
        console.log("after:",str.replace('\\',''));
        return str.replace('\\','');
    }
}