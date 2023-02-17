const knex=require("knex");
    let con={ 
        client:"mysql",
    connection:{
        host:"127.0.0.1",
        user:"root",
        password:"",
        database:"knex"
    }}
module.exports=con;
// module.exports = {
//     client:"mysql",
//     connection:{
//                 host:"127.0.0.1",
//                 user:"root",
//                 password:"",
//                 database:"Knex"
//             }
// };