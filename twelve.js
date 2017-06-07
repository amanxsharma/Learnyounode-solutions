var http = require('http');
var map = require('through2-map');


 upper = map(function(chunk){
    return chunk.toString().toUpperCase();
     });

var server = http.createServer(function(req,res){
    if(req.method == 'POST')
    {
        src = req.pipe(upper)
        src.pipe(res);
    }
});

server.listen(process.argv[2]);

