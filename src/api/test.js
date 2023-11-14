import express from "express";
const app = express()

app.listen(3000, () => {
    console.log('실행 중 포트 : 3000')
})
app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('hello node!')
})

app.post('/add', (req, res) => {
    const obj = {
        title : req.body.title,
        content : req.body.content
    }
    res.status(201).send(obj)
})


