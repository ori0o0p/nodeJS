const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('실행 중 포트 : 3000')
})

const mongoose = require('mongoose')
mongoose.connect('')
// const db = mongoose.connection

app.use(express.json())

let object = {
    name : 'string',
    age : 'int'
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

