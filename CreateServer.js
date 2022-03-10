var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors());
var con = mysql.createConnection({
    host : "localhost",
    user : "com",
    password : "12345",
    database : "company"
});

    con.connect(function(err){
    if(err){
        console.log(err.message);
    }
    else{
        console.log("connection succesfully");
    }
});

app.listen(7000,()=>{
    console.log("server running");
});