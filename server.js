//import express module
let express = require("express");
//import body-parser module
let bodyparser = require("body-parser");

let cors = require("cors");

//create rest object
let app = express();
//enable the ports communication
app.use(cors());
//set the json as MIME type
app.use(bodyparser.json());
//read the json
app.use(bodyparser.urlencoded({extended:false}));
//app.use("/login", require("./login/login"));
app.use("/fetch", require("./fetch/fetch"));
app.use("/insert", require("./insert/insert"));
app.use("/fetchHistory", require("./fetchHistory/fetchHistory"));
app.listen(3000);
console.log("server listening the port no. 3000")