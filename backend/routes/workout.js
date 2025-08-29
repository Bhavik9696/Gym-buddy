const express=require('express');
// const Workout=require('../models/workoutModel.js')
const router=express.Router();
const {createWorkout,getworkouts,getworkout,deletebyid,update}=require('../controllers/workoutController')

router.get('/',getworkouts);


router.get('/:id',getworkout)

router.post('/',createWorkout)


router.delete('/:id',deletebyid)


router.patch('/:id',update)

module.exports=router;