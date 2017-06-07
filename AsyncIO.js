var fs = require('fs');
var buf = new Buffer(256)

fs.readFile('test.txt',function (err, buf){
    if (err) throw err
var str = buf.toString();
var s1 = str.split('\n');
console.log(s1.length - 1)
for(var i = 0; i < s1.length; i++)
{
    console.log(s1[i]);
}
})
