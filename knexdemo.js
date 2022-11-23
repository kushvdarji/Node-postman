let knex=require("knex")
(
    {
        client:"mysql",
        connection:{
            server:"localhost",
            user:"root",
            password:"",
            database:"Knex"
        }
    }
)
knex.select("*").from("Kush")
.then(function(depts) { 
    depts.forEach(function(dept){
        console.log(dept);
    })
}).catch(function(err){
    console.log(err);
}).finally(function(){
    knex.destroy();
});