import express from 'express';
import bodyParser from 'body-parser';

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
