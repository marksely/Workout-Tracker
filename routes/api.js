const router = require("express").Router();
const {Workout} = require("../models/workouts");
const path = require('path');

router.get('/api/workouts',(req,res) => {
    Workout.find({})
    .then(data => {
        res.json(data);
    }) 
    .catch(err => {
        res.status(400).json(err);
    })
});

router.get('/api/stats', (req,res) => {
    Workout.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});
 


module.exports = router;