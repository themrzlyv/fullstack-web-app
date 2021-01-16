import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routers from './routers/index.js';
import ConnectDb from './helpers/ConnectDb.js';

//dotenv configure
dotenv.config();

// Mongo Db Connection
ConnectDb();

// creating express server
const server = express();


// port configure
const PORT = process.env.PORT

//cors configure
server.use(cors())

server.use(express.json())

// Api routers
server.use("/api" , routers)



server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT} in ${process.env.NODE_ENV}`)
})

