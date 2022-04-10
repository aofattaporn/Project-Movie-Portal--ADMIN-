const express = require("express");
const routerCinema = express.Router();
const { getCinemas, 
   getCinemaByName, 
   getCinemaById,
   getTheater,
   createCinema, 
   deleteCinemas, 
   deleteCinemaById,
   updateCinema

} = require('../../controller/cinema');

routerCinema.get('/', getCinemas)

routerCinema.get('/:id', getCinemaById)

routerCinema.get('/theaters/:id', getTheater)

routerCinema.get('/:cinema_name', getCinemaByName)

routerCinema.post('/create', createCinema);

routerCinema.delete('/delete', deleteCinemas);

routerCinema.delete('/delete/:id', deleteCinemaById);

routerCinema.put('/update/:id', updateCinema);


module.exports = routerCinema;