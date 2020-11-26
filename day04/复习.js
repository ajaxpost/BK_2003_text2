// global
// console.log(global)

//__filename
// console.log(__filename)

//__dirname
// console.log(__dirname)

//os模块
const os = require('os');
// console.log(os.EOL)
// console.log(os.cpus())
// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.hostname())
// console.log(os.type())


//path模块
const path = require('path');
// console.log(path.basename(__filename))
// console.log(path.dirname(__filename))
// console.log(path.join('a','b','c'))
// console.log(path.join('a','/b','c'))
// console.log(path.join('a','../b','c'));
// console.log(path.resolve('a','b','c'))
// console.log(path.resolve('a','/b','c'))
// console.log(path.resolve('../a','b','c'))
// console.log(path.resolve('a','../b','/c'))

//url模块
const url = require('url');
// console.log(url.parse('http://127.0.0.1:8080/',true))
// console.log(url.resolve('http://127.0.0.1:8080/bar/one','bar'))
// console.log(url.resolve('http://127.0.0.1:8080/bar/one','/bar'))

//fs模块

/*
写入    
fs.writeFile(路径,写入的内容,(err)=>{})   异步
fs.writeFileSync(路径,写入内容,(err)=>{})  同步

//读取
fs.readFile(路径,编码格式,(err,data)=>{})   异步
let data = fs.readFileSync(路径);   同步   data 存储读取的内容(只限同步操作)

//查询是否有这个文件
fs.existsSync(路径)    true/false

//查看文件信息
fs.stat(路径,(err,stats)=>{})


*/


//http模块
const http = require('http');
// const server = http.createServer();
// server.on('request',(req,res)=>{
//     let pathname = req.url;
//     let filename = pathname === '/' ? '/index.html' : pathname;
//     if(pathname === '/favorite.ico'){
//         //读取文件
//         let str = path.join(__dirname,'public',pathname)
//         fs.readFile(str,(err,data)=>{})
//     }
// })
// server.listen(8080,()=>{})

// //获取get传参数据
// let {query} = url.parse(req.url,true)

// //获取post传参数据
// let arr = []
// req.on('data',buffer =>{
//     arr.push(buffer)
// })
// req.on('end',()=>{
//     let buffer = Buffer.concat(arr);
//     let one = querystring.parse(buffer.toString());


// })

//express
// const express = require('express')
// const app = express();
// app.use(express.static('public'));

// app.get('/',(req,res)=>{})

//获取get
// app.get('/',(req,res)=>{
//     console.log(req.query)
// })

//内置中间件
const express = require('express');
const app = express();
app.use(express.urlencoded())