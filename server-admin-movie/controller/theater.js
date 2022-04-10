let Cinema = require('../model/cinema');
const ObjectID = require('mongodb').ObjectID;

const getTheater =(req, res)=>{
   Cinema.findById(req.params.id, {theater: 1}, (err, cinemas)=>{
      if(err){
         console.log(err);
      } 
      else{
         res.json(cinemas);
      }
   });
}


module.exports = {getTheater};