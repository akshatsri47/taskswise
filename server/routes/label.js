import express from 'express';
import prisma from '../prisma.js';
const router = express.Router();
router.post("/addlabel", async(req,res)=>{
    const{name} = req.body;
    try{
    const label = await  prisma.label.create({
        data:{
            name,
        }
    })
    res.json(label)
}
catch(error){
    console.log(error.message)
}
})
router.put("/updatelabel/:id",async(req,res)=>{
    const{name} = req.body;
    try{
        const label = await prisma.label.update({
            where:{id:parseInt(id)},
            data:{
                name,
            }
        })
        res.json(label);
    }
    catch(error){

        console.log(error.message);
    }
})
router.get("/label",async(req,res)=>{
    const label = await prisma.label.findMany()
    res.json(label);
})
export default router;
