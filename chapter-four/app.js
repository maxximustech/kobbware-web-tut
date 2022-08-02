const http = require('http');

const server = http.createServer(function(req,res){
    res.statusCode = 200;
    res.write('<html>');
    res.write('<head><title>Node Server</title></head>');
    if(req.url === '/'){
        res.write('<body><h1>HomePage!</h1></body>');
    }else if(req.url === '/about'){
        res.write('<body><h1>About Page!</h1></body>');
    }else{
        res.write('<body><h1>Other Page!</h1></body>');
    }
    res.write('</html>');
    res.end();
});
server.listen(4000);