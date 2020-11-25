const fs = require('fs');
const os = require('os')

function add(req, res, next) {
    //获取请求时间
    let time = new Date();


    //获取请求的地址
    let url = req.url;

    //获取IP地址
    let IP = req.rawHeaders[1];

    //获取请求方式
    let method = req.method;

    //获取浏览器版本信息
    let banBen = req.rawHeaders[9]


    console.log(IP, time, url, method, banBen)
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();

  
        fs.appendFile(`../logs/${year.toString() + month.toString() + day.toString()}.log`, IP + os.EOL + time+ os.EOL + url + os.EOL+ method+ os.EOL + banBen+ os.EOL, (err) => {
            if (err) {
                console.log('写入失败')
            }
        })
    

    next()
}


module.exports = add;