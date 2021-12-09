const mongoose = require('mongoose')

let hobbitSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minLength: 2,
        maxLength: 100
    },
    height: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        default: 1000
    },
    leftShire: {
        type: Boolean,
        default: false
    },
    description: String
})

module.exports = mongoose.model('Hobbit', hobbitSchema)