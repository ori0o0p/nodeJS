const express = require('express')
const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log('실행 중 포트 : 3000')
})

let object = {
    name : '김승원',
    age : 17
};

app.get('/hello', (res) => {
    res.send('hello node!')
})

app.get('/hello', (res) => {
    res.send(object)
})

app.post('/add', (req, res) => {
    const obj = {
        title : req.body.title,
        content : req.body.content
    }
    res.status(201).send(obj)
})

