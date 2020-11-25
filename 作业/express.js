const express = require('express');
const one = require('./text');


const app = express();

app.use(one);

app.get('/',(req,res)=>{
    res.send('hello word')
})

app.post('/hdk',(req,res)=>{})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})