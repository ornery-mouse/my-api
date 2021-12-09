const express = require('express')
const app = express()
const db = require('./models')

// body parser middleware
app.use(express.urlencoded({extended: false}))

app.use('/hobbits', require('./controllers/hobbit'))

app.get('/', (req, res) => {
    res.json({message: 'LotR Server Home Route'})
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on Port 3000')
})