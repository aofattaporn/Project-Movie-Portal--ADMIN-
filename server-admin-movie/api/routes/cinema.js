const express = require("express");
const routerCinema = express.Router();
const { getCinemas, getCinemaByName, createCinema, deleteCinemas, updateCinema} = require('../../controller/cinema');

routerCinema.get('/', getCinemas)

routerCinema.get('/:cinema_name', getCinemaByName)

routerCinema.post('/create', createCinema);

routerCinema.delete('/delete', deleteCinemas);

routerCinema.put('/update/:cinema_name', updateCinema);

module.exports = routerCinema;