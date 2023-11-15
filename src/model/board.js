import mongoose from 'mongoose'

const boardSchema = new mongoose.Schema({
    title: String,
    content: String
}, {collection: 'board', versionKey: false })

const Board = mongoose.model('board', boardSchema)

module.exports = Board
