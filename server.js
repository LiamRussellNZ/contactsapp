var express=require('express');
var app=express();
app.use(express.static(__dirname+'/public'));
app.use('/libs',  express.static(__dirname + '/libs'));

var port=8080;
app.listen(port,function(){
	console.log("app2 active on port " +port);
});

