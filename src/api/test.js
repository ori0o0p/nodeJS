import express, { Router } from "express";

const app = express()

app.listen(3000, () => {
    console.log('실행 중 포트 : 3000')
})
app.use(express.json())

import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/nodejs')
        .then(() => console.log('db 연결!'))
        .catch((error) => console.error(error))

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
}, {collection: 'user', versionKey: false })

const User = new mongoose.model('User', userSchema)

app.post('/user', async (req, res) => {
    const testUser = new User({
        name: 'test',
        age: 111
    })

    await testUser.save()
    res.json(testUser)
}) 

app.get('/', (req, res) => {
    console.log('접속하였습니다.')
    res.redirect('/hello')
})

