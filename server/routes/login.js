// 
import express from 'express';
import prisma from '../prisma.js';
import { Router } from 'express';
import loginschema from '../authentication/schema.js';
import bcrypt from 'bcrypt'
import {  comparepassword } from '../authentication/loginjwt.js'; 
import tokengenration from '../authentication/loginjwt.js';// Ensure these functions are correctly exported from the loginjwt.js

const router = express.Router();

router.post('/register', async (req, res) => {
    const validation = loginschema.safeParse(req.body);
    if (!validation.success) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });
        const jwtoken = await tokengenration(user.id);
        res.status(201).json({ user, token: jwtoken });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/users", async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            
            return res.status(404).json({ error: 'User not found' });
        }

        

        const checkPass = await comparepassword(password, user.password);
        
        if (!checkPass) {
           
            return res.status(401).json({ error: 'Invalid password' });
        }

        const jwtoken = await tokengenration(user.id);
        res.status(200).json({ user, token: jwtoken });
    } catch (error) {
        
        res.status(500).json({ error: error.message });
    }
});


export default router;
