const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cinema = new Schema({
   cinema_name: {type: String}, 
   cinema_area: {type: String, enum:["กรุงเทพ", "กลาง","เหนือ","ใต้", "อีสาร"] },
   cinema_location: {type: String},
   theater: [{
      theater_id: {type: Number},
      theater_name: {type: Number},
      theater_seat: [{
         seat_type: {type: String}, 
         seat_price: {type: Number}
      }]
   }]
});

module.exports = mongoose.model('Cinema', Cinema);;