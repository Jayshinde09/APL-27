var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'Text/html'});
    res.end('Hello Soham! Its Web Module');
}).listen(8080);
console.log('server running at http://localhost:8080/');