import express from 'express'
import deleteNavbar from '../controllers/Navbar/deleteNavbar.js';
import getbyIdNavbar from '../controllers/Navbar/getbyIdNavbar.js';
import getNavbar from '../controllers/Navbar/getNavbar.js';
import postNavbar from '../controllers/Navbar/postNavbar.js';
import putNavbar from '../controllers/Navbar/putNavbar.js';

const navbar = express.Router();

// http://localhost:3050/api/navbar   in this location now

navbar.get("/", getNavbar)
navbar.get("/:id", getbyIdNavbar)
navbar.post("/", postNavbar)
navbar.put("/:id", putNavbar)
navbar.delete("/:id", deleteNavbar)



export default navbar;