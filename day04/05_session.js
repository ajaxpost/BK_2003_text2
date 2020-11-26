const express = require('express');
const session = require('cookie-session');

const app = express();

// app.use()

app.get('/',session(
    {
        name:'sessionid',
        secret:'esvgfnhjmk',
        maxAge:20 * 60 *1000,
    }
),(req,res)=>{
    if(!req.session.hdk){
        req.session.hdk = 1;
        
    }else{
        req.session.hdk++;
        
    }
    res.send(req.session.hdk+'次')
    console.log(req.session)
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
})