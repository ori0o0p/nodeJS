import express from 'express'

const router = express.Router()

router.post('/board', async(req, res) => {
    const {title, content} = req.body
})