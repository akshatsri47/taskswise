import express from 'express';
import bodyParser from 'body-parser';
import taskrouter from './routes/task.js'
import projectrouter from './routes/projects.js'


import { testConnection } from './config/db.js';
import dotenv from 'dotenv';
import router from './routes/login.js';
dotenv.config()

const app = express();
const port= 3000;
app.use(express.json())
app.use(bodyParser.json())
app.listen(3000);
testConnection();
app.use("/",router)
app.use("/app",taskrouter)
app.use("/app",taskrouter,projectrouter)
