const express=require('express');
require('dotenv').config()
const app=express();

const workoutRouts=require('./routes/workout.js')

app.use(express.json());

app.use((req,res,next)=>{
  console.log(req.body,req.method);
  next();
})

app.get('/',(req,res)=>{
  res.json({
    msg:"elcome"
  })
})

app.use('/api/workouts/',workoutRouts)

app.listen(process.env.PORT,()=>{
  console.log(`server running on http://localhost:${process.env.PORT}`);
})