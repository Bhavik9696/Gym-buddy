const express=require('express');
require('dotenv').config()
const app=express();

app.use((req,res,next)=>{
  console.log(req.body,req.method);
  next();
})

app.get('/',(req,res)=>{
  res.json({
    msg:"elcome"
  })
})

app.get('/workouts',(req,res)=>{
  res.json({
    msg:"workout",
    status:1
  })
})

app.listen(process.env.PORT,()=>{
  console.log(`server running on http://localhost:${process.env.PORT}`);
})