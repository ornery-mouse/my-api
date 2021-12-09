const db = require('../models')
const router = require('express').Router()

router.get('/', (req, res) => {
    db.Hobbit.find()
        .then(hobbits => {
        res.status(200).json(hobbits)
        })
        .catch(err => {
            console.log(err)
            res.status(503).json({message: 'Database running?'})
    })
})

router.post('/', (req, res) => {
    db.Hobbit.create(req.body)
        .then(createdHobbit => {
        res.status(200).json(createdHobbit)
        }).catch(err => {
            console.log('Error while creating', err)
            if (err.name === 'ValidationError') {
                res.status(406).json({message: 'Validation Error'})
            } else {
                res.status(503).json({message: 'Database or server error!'})
            }
    })
})

router.get('/:id', (req, res) => {
    db.Hobbit.findOne({ _id: req.params.id })
        .then(foundHobbit => {
        res.status(200).json(foundHobbit)
    }).catch(err => {
        console.log('Error while creating', err)
        if (err.name === 'ValidationError') {
            res.status(406).json({message: 'Validation Error'})
        } else {
            res.status(503).json({message: 'Database or server error!'})
        }
    })
})

router.put('/:id', (req, res) => {
    db.Hobbit.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {new: true})
        .then(updatedHobbit => {
        res.json(updatedHobbit)
        })
        .catch(err => {
            console.log(err)
            res.status(503).json({ message: 'DB error during update!'})
    })
})

router.delete('/:id', (req, res) => {
    db.Hobbit.findOneAndDelete({
        _id: req.params.id
    })
        .then(deletedHobbit => {
        res.json(deletedHobbit)
        })
        .catch(err => {
            console.log(err)
            res.status(503).json({ message: 'DB error during update!'})
    })
})

module.exports = router