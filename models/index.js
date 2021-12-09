const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/lotr')

const db = mongoose.connection

db.once('open', () => {
    console.log(`Connected to MongoDB @ ${db.host}:${db.port}`)
})

db.on('error', err => console.error('Database error:\n', err))

module.exports.Hobbit = require('./hobbit')