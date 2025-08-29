const express=require('express');
// const Workout=require('../models/workoutModel.js')
const router=express.Router();
const {createWorkout,getworkouts,getworkout,deletebyid}=require('../controllers/workoutController')

router.get('/',getworkouts);


router.get('/:id',getworkout)

router.post('/',createWorkout)


router.delete('/:id',deletebyid)


router.patch('/:id',(req,res)=>{
  res.json({
    msg:`upadte by patch workouts by id : ${req.params.id}`
  })
})

module.exports=router;