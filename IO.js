var fs = require('fs');
var buf = new Buffer(256)
buf = fs.readFileSync('test.js');
var str = buf.toString();
var s1 = str.split('\n');
console.log(s1.length - 1)
for(var i = 0; i < s1.length; i++)
{
    console.log(s1[i]);
}