var express=require('express');
var mysql=require('mysql');
var  app=express();
var pool=mysql.createPool({
	host:"localhost",
	user:'root',
	password:"123456",
	database:"item",
	port:3306
	
})
app.use('/',function(req,res){
	res.setHeader('Access-Control-Allow-Origin', '*');
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}
		var sql='select * from news';
		connection.query(sql,function(err,data){
			if(err){
				console.log(err)
			}
			res.send(data)
			connection.end();
		})
		
	})
})

app.listen(8000,function(){
	console.log('ok')
})
