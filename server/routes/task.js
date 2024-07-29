import express from 'express';
import prisma from '../prisma.js';

const router = express.Router();
router.post("/taskadd",async (req,res) =>{
    const {title,description,duedate,priority} = req.body;
    try{
    const  Task = await  prisma.task.create({
        data:{
        title,
        description,
        duedate: new Date(),
        priority,
      }  } )
    console.log("task saved succesfully")
    res.status(201).json(task);
}
catch(error){
    console.error("Error saving task:", error);
}
})
router.get("/tasks",async(req,res)=>{
    try{
        const Task = await prisma.task.findMany()
        res.json(Task)

    }
    catch(error){
        console.log("error fetching records")
    }
})

export default router