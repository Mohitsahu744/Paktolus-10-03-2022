var mysql = require('mysql');
var express = require('express');
var app = express();
//==========Database=============
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
        console.log("succesfull...");
    }
});
//================Create api=====================

    app.get('/api/display_all_data', function(req,res){
        let sqlQuery= "SELECT * FROM employee";
        let query = con.query(sqlQuery,function(err,result){
            if(err) throw err;
            res.send(JSON.stringify({"status" : 200, "response" : result}  ));
        });
    });
   
 
    
    app.listen(8000,()=>{
        console.log("server running");
    });
    