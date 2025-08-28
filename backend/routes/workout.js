const express=require('express');

const router=express.Router();

router.get('/',(req,res)=>{
  res.json({
    msg:"all work outs"
  })
})


router.get('/:id',(req,res)=>{
  res.json({
    msg:`all work outs ${req.params.id}`
  })
})

router.post('/',(req,res)=>{
  res.json({
    msg:`post workouts`
  })
})


router.delete('/:id',(req,res)=>{
  res.json({
    msg:`delete workouts by id : ${req.params.id}`
  })
})


router.patch('/:id',(req,res)=>{
  res.json({
    msg:`upadte by patch workouts by id : ${req.params.id}`
  })
})

module.exports=router;