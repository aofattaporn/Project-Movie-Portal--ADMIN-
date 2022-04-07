let Cinema = require('../model/cinema');

const getCinemas =(req, res)=>{
   Cinema.findOne((err, cinemas)=>{
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

const createCinema =(req, res)=>{
   Cinema.create(req.body, (err, cinema)=>{
      if(err){
         console.log(err);
      }else{
         res.json(cinema);
      }
   });
}

const deleteCinemas =(req, res)=>{
   Cinema.remove((err, data)=>{
      if(err){
         console.log(err);
      }else{
         res.json({msg: data});
      }
   });
}

// *******
const updateCinema =(req, res)=>{
   console.log(req.params.cinema_name);
   Cinema.find({"cinema_name" :  req.params.cinema_name}, (err, cinema)=>{
      if(err){
         console.log(err);
      } 
      else{
         // console.log(cinema.getCi);
         cinema.forEach((item)=>{
            let id = item.id;
         })

         // findbyid 
         Cinema.findByIdAndUpdate('')


         res.json(cinema);
      }
   });
}

const createTheater =(req, res)=>{
   
}


module.exports = {getCinemas, getCinemaByName, createCinema, deleteCinemas, updateCinema};

