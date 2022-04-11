const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cinema = new Schema({
   cinema_name: {type: String}, 
   cinema_area: {type: String, enum:["กรุงเทพ", "กลาง","เหนือ","ใต้", "ตะวันออกเฉียงเหนือ", "ตะวันตก", "ตะวันออก"] },
   theater: [],
   movie: []
}, []);

module.exports = mongoose.model('Cinema', Cinema);;