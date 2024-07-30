import express from 'express';
import prisma from '../prisma.js'

const router = express.Router();
router.get("/projects", async(req,res)=>{
    try{
    const projects = await prisma.project.findMany();
    res.json(projects)
    }
    catch(error){
        console.log("error.message");
    }
})
router.post("/addproject",async(req,res)=>{
    const {name,userId} =req.body;
    
    try{
    const  task = await prisma.project.create({
        data:{
            name,
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

router.put("/addproject/:id", async(req,res)=>{
    const{name} = req.body;
    const {id} = req.params;
    try{
    const project = await prisma.project.updateMany({
        where:{id:parseInt(id)},
        data:{name}
        
    })
    res.json(project)
    }
    catch(error){
        console.log(error.message)
    }
})
router.delete("/deleteproject/:id",async(req,res)=>{
    const{id} = req.params;
    const project = await prisma.project.deleteMany({
        where:{id:parseInt(id)}
    })
})
export default  router;