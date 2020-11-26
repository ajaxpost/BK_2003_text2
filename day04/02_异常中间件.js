const express = require('express');
const fs = require('fs');

const app = express();

app.get('/',(req,res)=>{
    try{
        let data = fs.readFileSync('eqjweq.txt');
    }catch(e){
        // console.log(err)
        throw new Error('错误');
    }
})

app.use((err,req,res,next)=>{
    res.send('Error'+err.message);
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})