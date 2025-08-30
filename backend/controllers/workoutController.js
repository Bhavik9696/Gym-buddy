const { set } = require('mongoose');
const workout=require('../models/workoutModel')

const createWorkout=async(req,res)=>{
  const {title,load,reps}=req.body;

  try{
    const createworkout = await workout.create({ title, load, reps });
    res.status(200).json(createworkout); }catch(error){
  res.status(400).json({error:error.message})
  }
}
const getworkouts=async(req,res)=>{
  const workouts=await workout.find({}).sort({createdAt:-1});
  if(!workouts){
    return res.status(400).json({error:"No entries found"})
  }
  res.status(200).json(workouts)
}

const getworkout=async(req,res)=>{
  const {id}=req.params;
  const workoutbyid=await workout.findById(id);
  if(!workoutbyid){
    return res.status(400).json({error:"No entries found"})
  }
   res.status(200).json(workoutbyid)

}

const deletebyid=async(req,res)=>{
    const {id}=req.params;
    const deleted = await workout.findByIdAndDelete(id);
    if(!deleted){
    return res.status(400).json({error:`No entries found by id : ${deleted}`})
  }
   res.status(200).json(deleted);


}


const update = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await workout.findByIdAndUpdate(id, { ...req.body }, { new: true });
    if (!updated) {
      return res.status(404).json({ error: "No entry found to update" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports={createWorkout,getworkouts,getworkout,deletebyid,update}