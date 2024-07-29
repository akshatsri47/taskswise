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
            console.log('User not found for email:', email); // Debugging statement
            return res.status(404).json({ error: 'User not found' });
        }

        console.log(`User found: ${user.email}, Hashed Password: ${user.password}`); // Debugging statement

        const checkPass = await comparepassword(password, user.password);
        console.log(`Password Comparison Result: ${checkPass}`); // Debugging statement
        if (!checkPass) {
            console.log('Invalid password for user:', email); // Debugging statement
            return res.status(401).json({ error: 'Invalid password' });
        }

        const jwtoken = await tokengenration(user.id);
        res.status(200).json({ user, token: jwtoken });
    } catch (error) {
        console.log('Error during login:', error.message); // Debugging statement
        res.status(500).json({ error: error.message });
    }
});


export default router;
