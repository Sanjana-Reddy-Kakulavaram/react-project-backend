let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let insert  = require("express").Router().post("/",(req,res)=>{
        talentsprint.connect("mongodb://localhost:27017/project_db",(err,db)=>
        {
            if(err)
                throw err;
            else{
                db.collection("login").insertOne({"name":req.body.name,"email":req.body.email,"phno":req.body.phno,"state":req.body.state,"city":req.body.city,"password":req.body.password},
                (err, result)=> {
                    if (err) throw err;
                    res.send({message:"1 document inserted"});
                    db.close();
                  });
                }
            });
        });
module.exports = insert;