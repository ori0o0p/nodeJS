const express = require('express')
const app = express()

app.listen(3000, () => console.log('실행 중'))

var object = {
    name : '김승원',
    age : 17
};

app.get('/hello', (req, res) => {
    res.send(object)
})


