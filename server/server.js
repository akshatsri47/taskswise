import express from 'express';
import bodyParser from 'body-parser';
import taskrouter from './routes/task.js'
import projectrouter from './routes/projects.js'
import labelrouter from './routes/label.js'


import { testConnection } from './config/db.js';
import dotenv from 'dotenv';
import router from './routes/login.js';
import cors from 'cors'
dotenv.config()

const app = express();
app.use(cors())
const port= 3001;
app.listen(port);
app.use(express.json())
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    
    res.send("hello")
});
testConnection();
app.use("/", router);
app.use("/app/tasks", taskrouter);
app.use("/app/projects", projectrouter);
app.use("/app/labels", labelrouter);




