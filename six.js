var mymodule = require('./sixmodule');

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]
function callback(err, data){
        if (err) console.log(err);
        else console.log(data);   
};
mymodule(folder,ext,callback);
