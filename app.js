const http=require("http");

http.createServer( function(res,res){
	res.write("first node code on nginx");
	res.end();
}
).listen(3000);

console.log("server started");
