var http = require('http');
var p = process.argv[2];
var count;
var str = '';
http.get(p,function callback(response){

response.on('error',function(){
    console.log(err);
});

response.on('data',function(data){
   /* for(var i = 0; i < data.toString().length; i++)
    {count++;}
    */
    str += data.toString();
    // console.log(data.toString().length);
    // console.log(data.toString());

});

response.on('end', function(){
    console.log(str.length);
    console.log(str);
})
});
