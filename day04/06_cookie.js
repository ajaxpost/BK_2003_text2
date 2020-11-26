const express = require('express');
const cookie = require('cookie-parser');
const app = express();

app.use(cookie());

app.get('/', (req, res) => {
    if (req.cookies.id) {
        res.cookie('id', req.cookies.id - 0 + 1, { maxAge: 60 * 60 * 1000 })
       
    } else {
        res.cookie('id', 1, { maxAge: 60 * 60 * 1000 });
    }

    req.cookies.id = req.cookies.id === undefined ? 1 :req.cookies.id-0+1;
    res.send(`${req.cookies.id}次`)

    console.log(req.cookies.id)
})

app.listen(8080, () => {
    console.log('http://127.0.0.1:8080')
})