const router = require("express").Router();
const {Workout} = require("../models/workouts");

router.get('/api/workouts',(req,res) => {
    Workout.find({})
    .then(data => {
        res.json(data);
    }) 
    .catch(err => {
        res.status(400).json(err);
    })
});

router.get("api/workouts/exercise", (req,res) => {
    res.render("exercise.html");
})

module.exports = router;