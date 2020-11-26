const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('gggg')
    next()
})

app.get('/',(req,res)=>{
    throw new Error('报错')
    res.send('hhh')
})
app.use((err,req,res,next)=>{
    res.send('error'+err.message)
    // console.log('hdk1111')
})
app.use((req,res,next)=>{
    res.statusCode = 404;
    res.send('I am 404')
    console.log(404)
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})