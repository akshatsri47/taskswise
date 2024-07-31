import prisma from "../prisma.js";
import express from 'express';
const router = express.Router();
router.post("/addtask", async(req,res)=>{
    const{title,description,dueDate, priority,projectId,userId} = req.body
    try{
    const task = await prisma.task.create({
        data:{
        title,
        description,
        dueDate,
        priority,
        project:{
            connect:{
                id:projectId
            }
        },
        user:{
            connect:{
                id:userId
            }
        }
    }
    })
    res.json(task);
}
catch(error){
    console.log(error.message);
}

})
router.get("/gettask",async(req,res)=>{
    try{
    const task = await prisma.task.findMany();
    res.json(task)
    }
    catch(error){
        console.log(error.message)
    
    }
})
router.put("/addtask/:id",async(req,res)=>{
    const{title,description,dueDate, priority,projectId,userId} = req.body
    const{id} = req.params;
    try{
        const task = await prisma.task.update({
            where:{id:parseInt(id)},
            data:{
                title,
                description,
                dueDate,
                priority,
                project:{
                    connect:{
                        id:projectId
                    }
                },
                user:{
                    connect:{
                        id:userId
                    }
                }
            } 

        })
        res.json(task);
    }
    catch(error){
        console.log(error.message);
    }


})
export default router