import express from 'express'
import deleteAbout from '../controllers/About/deleteAbout.js';
import getAbout from '../controllers/About/getAbout.js';
import getByIdAbout from '../controllers/About/getByIdAbout.js';
import postAbout from '../controllers/About/postAbout.js';

const aboutRouter = express.Router();

// http:localhost:3050/api/about    in this location

aboutRouter.get("/",getAbout)
aboutRouter.post("/",postAbout)
aboutRouter.get("/:id",getByIdAbout)
aboutRouter.delete("/:id",deleteAbout)



export default aboutRouter;