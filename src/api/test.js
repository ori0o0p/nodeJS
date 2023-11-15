import express, { Router } from "express";

const app = express()

app.listen(3000, () => {
    console.log('실행 중 포트 : 3000')
})
app.use(express.json())

import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/nodejs', {useNewUrlParser: true})
        .then(() => console.log('db 연결!'))
        .catch((error) => console.error(error))
        
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const user = new mongoose.model('user', userSchema)

app.post('/', async (req, res) => {
    const user = new user({
        name: 'test',
        age: 111
    })
}) 

app.get('/hello', (req, res) => {
    res.json({'message': 'lol',
              'point': '/hello'})
})

app.post('/add', (req, res) => {
    const obj = {
        title : req.body.title,
        content : req.body.content
    }
    res.status(201).send(obj)
})

app.get('/', (req, res) => {
    console.log('접속하였습니다.')
    res.redirect('/hello')
})

