var http = require('http');
var p = process.argv[2];
http.get(p,function callback(response){

response.on('error',function(){
    console.log(err);
});

response.on('data',function(data){
    console.log(data.toString());
});
});
