const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const mongoose = require('mongoose');


//GET ALL
router.get('/tasks', (req, res, nex) => {
    Task.find()
        .then((responseFromDB) => {
            res.json(responseFromDB)
        })
        .catch((err) => {
            res.json(err);
        })
})

//CREATE
router.post('/tasks/create', (req, res, next) => {
    Task.create({
            title: req.body.title,
            description: req.body.description,
            doneYet: req.body.doneYet
        })
        .then((responseFromDB) => {
            res.json(responseFromDB);
        })
        .catch((err) => {
            res.json(err)
        })
})


//DETAILS
router.get('/tasks/:id', (req, res, next) => {
    // console.log(req.params);

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({
            message: 'specified id is not valid'
        });
        return;
    }

    Task.findById(req.params.id)
        .then((responseFromDB) => {
            res.json(responseFromDB)
        })
        .catch((err) => {
            res.json(err);
        })
})

//UPDATE
router.put('/tasks/update/:id', (req, res, next) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({
            message: 'specified id is not valid'
        });
        return;
    }

    const updates = {
        title: req.body.title,
        description: req.body.description,
        doneYet: req.body.doneYet
    };

    Task.findByIdAndUpdate(req.params.id, updates)
        .then(responseFromDB => {
            res.json({
                message: responseFromDB
            });
        })
        .catch(error => next(error))
})


//DELETE

router.delete('/tasks/:id', (req, res, next) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({
            message: 'specified id is not valid'
        });
        return;
    }

    Task.remove({
            _id: req.params.id
        })
        .then(responseFromDB => {
            return res.json({
                message: responseFromDB
            })
        })
        .catch(error => next(error))
});

module.exports = router;
