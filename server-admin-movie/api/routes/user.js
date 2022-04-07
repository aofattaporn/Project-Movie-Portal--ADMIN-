const express = require("express");
const routerUser = express.Router();
let User = require('../../model/user.model');
let Todo = require('../../model/todo.model');


routerUser.get('/', (req, res)=>{
   User.find((err, user)=>{
      if (err) {
          console.log(err);
      } else {
          res.json(user);
      }
   });   
});

routerUser.post('/add', (req, res)=>{
   let user = new User(req.body);
   user.save()
       .then(user => {
           res.status(200).json({'todo': 'user added successfully'});
       })
       .catch(err => {
           res.status(400).send('adding new todo failed');
       });
}) 

module.exports = routerUser;





