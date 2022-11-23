const express = require("express");
const app =express();
const knex = require('knex')(require('./config'))
app.get("/", (req, res) => {
  try{
  knex('Kush').select('*').then((data)=> { 
  console.log(data);
  res.send(data)
  })}
  catch(err)
  {
    res.send(err)
    console.log(err);
  }
});
app.listen(3500, function(){
  console.log("server");
});