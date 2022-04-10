const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const cinemaRoutes = require('./api/routes/cinema');
const logger = require('./logger');



app.use(cors());
app.use(bodyParser.json());
app.use(logger);


// connecting mongos 
mongoose.connect('mongodb://127.0.0.1:27017/MoviePortal', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', ()=>{
   console.log("MongoDB database connection established successfully");
})

// managge routes 
app.use('/cinemas', cinemaRoutes)

// create server 
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});