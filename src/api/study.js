import express from 'express'
import Board from '/model/board.js'

const router = express.Router()

router.post('/board', async(req, res) => {
    const {title, content} = req.body

    const board = Board({title, content})
    await board.save()
})