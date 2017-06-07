    var fs = require('fs');
    var path = require('path');

  module.exports = function (folder, extension, callback){
    fs.readdir(folder, function (err, files) {
      if (err) return callback(err);
      else files.forEach(function (file) {
        if (path.extname(file) === extension) {
          return callback(null,file);
        }
      })
    })

  }