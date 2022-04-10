const express = require("express");
const routerTheater = express.Router();
const { getTheater }= require('../../controller/theater');


routerTheater.get('/:id', getTheater);



module.exports = routerTheater;