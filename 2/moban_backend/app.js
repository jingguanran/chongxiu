

var express = require('express');
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database:'item'
});

app.get('/',function(req,res){
    connection.query('SELECT * FROM moban',function(err,rows){
        res.header("Access-Control-Allow-Origin","*")
        res.send([1,2,3])
    })
    
})
app.listen(3000)