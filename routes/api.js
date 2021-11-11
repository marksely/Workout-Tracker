const router = require("express").Router();
const {Workout} = require("../models/workouts");

router.get('/api/workouts',(req,res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then(data => {
        res.json(data);
        console.log(data);
    }) 
    .catch(err => {
        res.status(400).json(err);
    })
});

router.put('/api/workouts/:id', (req,res) => {
    Workout.findOneAndUpdate(
        {
            _id: req.params.id
        },
        {
            $push: { exercises: req.body}
        }
    )
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    })
});

router.post('/api/workouts', ({body},res) => {
    console.log(body);
    Workout.create(body)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
        console.log(err);
    })
});

router.get('/api/workouts/range', (req,res) => {
});
 


module.exports = router;