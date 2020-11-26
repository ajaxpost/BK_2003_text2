const express=  require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser())
app.get('/',(req,res)=>{
    if(req.cookies.name){
        console.log(req.cookies)
        res.send('欢迎回来')
    }else{
        res.cookie('name','hdk',{maxAge:86400*1000})
        res.send('欢迎新用户')
    }
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})