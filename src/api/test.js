const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('실행 중 포트 : 3000')
})
app.use(express.json())

const mongoose = require('mongoose')

mongoose.connect('')
        .then(() => console.log('db 연결 성공'))
        .catch((error) => console.log(error))

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const User = mongoose.model('User', userSchema)

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

