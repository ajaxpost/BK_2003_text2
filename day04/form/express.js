const express = require('express');
const post = require('body-parser');
const app = express();
app.use(post.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.send('提交成功')
    console.log(req.query);
})

app.post('/',(req,res)=>{
    res.send('ok');
    console.log(req.body);
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
})