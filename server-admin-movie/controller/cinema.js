let Cinema = require('../model/cinema');
const ObjectID = require('mongodb').ObjectID;

const getCinemas =(req, res)=>{
   Cinema.find((err, cinemas)=>{
      if(err){
         console.log(err);
      } 
      else{
         res.json(cinemas);
      }
   });
}

const getCinemaById =(req, res)=>{
   Cinema.findById(req.params.id, (err, cinemas)=>{
      if(err){
         console.log(err);
      } 
      else{
         res.json(cinemas);
      }
   });
}

const getCinemaByName =(req, res)=>{
   Cinema.find({"cinema_name" :  req.params.cinema_name}, (err, cinema)=>{
      if(err){
         console.log(err);
      } 
      else{
         res.json(cinema);
      }
   });
}

const getTheater =(req, res)=>{
   Cinema.findById(req.params.id, {theater: 1}, (err, cinemas)=>{
      if(err){
         console.log(err);
      } 
      else{
         cinemas.theater.forEach(element => {
            console.log(element._id);
         });
         res.json(cinemas.theater);
      }
   });
}

const createCinema =(req, res)=>{
   Cinema.create(req.body, (err, cinema)=>{
      if(err){
         console.log(err);
      }else{
         res.json(cinema);
      }
   });
}

const updateCinema =(req, res)=>{
   let o_id = ObjectID(req.params.id);
   Cinema.findByIdAndUpdate(o_id , req.body, (err, cinema)=>{
      if(err){
         console.log(err);
      }else{
         res.json(`update ${cinema}`);
      }
   })
}

const deleteCinemas =(req, res)=>{
   Cinema.deleteMany((err, data)=>{
      if(err){
         console.log(err);
      }else{
         res.json({msg: data});
      }
   });
}

const deleteCinemaById =(req, res)=>{
   let o_id = ObjectID(req.params.id);

   console.log(o_id);

   Cinema.findOneAndDelete({ _id: o_id }, (err, data)=>{
      if(err){
         console.log(err);
      }else{
         res.json({msg: data});
      }
   });
}

module.exports = { 
   getCinemas, 
   getCinemaById,
   getCinemaByName, 
   getTheater,
   createCinema, 
   updateCinema,
   deleteCinemas, 
   deleteCinemaById
};

