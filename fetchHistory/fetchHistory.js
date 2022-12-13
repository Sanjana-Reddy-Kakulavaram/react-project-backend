//this file acting as module(fetch)
//login odule accepts the from angular
//login module fetch from "mongodb" database

var express = require('express');
var bodyParser = require('body-parser');

let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let fetchHistory = express.Router().get("/",(req,res)=>{
    talentsprint.connect("mongodb://localhost:27017/project_db",(err,db)=>{
        if(err){
            throw err;
        }
        else{
            db.collection("expenses").find({}).toArray((err,array)=>{
                if(err){
                    throw err;
                }
                else{
                    if(array.length>0){
                        res.send(array);
                    }
                    else{
                        res.send({message:"Record Not Found..."});
                    }
                }
            });
        }
    });
});
module.exports = fetchHistory;