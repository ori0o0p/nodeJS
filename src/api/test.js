import express from "express";

const app = express()

app.listen(3000, () => {
    console.log('실행 중 포트 : 3000')
})
app.use(express.json())

import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/nodejs')
        .then(() => console.log('db 연결!'))
        .catch(error => console.error(error))

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
}, {collection: 'user', versionKey: false })

const User = new mongoose.model('User', userSchema)

app.post('/user', async (req, res) => {
    const testUser = new User({
        name: req.body.name,
        age: req.body.age
    })

    await testUser.save()
    res.json(testUser)
}) 

app.get('/home', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(e => res.send(e))
})

app.get('/', (req, res) => {
    console.log('접속하였습니다.')
    res.redirect('/home')
})

app.delete('/remove', async (req, res) => {
    await User.deleteOne({name: 'test'})
              .then(() => console.log('삭제 완료!'))
              .catch(e => console.log(e))
})

app.delete('/remove-one', async(req, res) => {
    const userName = req.body.name
    await User.deleteOne({name: userName})
              .then(userName + "삭제 완료")
})