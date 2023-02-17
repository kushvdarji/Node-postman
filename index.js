const express = require("express");
var bodyParser=require("body-parser")
const app =express();
const knex = require('knex')(require('./config'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get("/get", (req, res) => {
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
app.post("/insert",(req,res)=>{
try {
    let data={
      ID:req.body.ID,
      Name:req.body.Name,
      Age:req.body.Age
    }
    knex('Kush')
    .insert(data).then(async(check)=>
    {
      console.log("inserted "+check);
      res.send("inserted "+check)
    },(err)=>{
      if(err){
        if(err.sqlMessage){
          res.send(err.sqlMessage)
        }
  res.send(err)}})} catch (error) {
  res.send(error)}})
app.listen(3500, function(){
  console.log("server");});
  