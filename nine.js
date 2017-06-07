var http = require('http');
var p = process.argv[2];
var q = process.argv[3];
var r = process.argv[4];
var count;
var async = require('async');
function call(url, callback) {
    var str1 = '';
    http.get(url, function (response) {
        response.on('error', function (err) {
            // console.log(err);
            return callback(err);
        });

        response.on('data', function (data) {
            str1 += data.toString();
        });

        response.on('end', function () {
            return callback(null, str1);
        })
    });
}



async.eachSeries([p,q,r],function(first,callback1){
    call(first, function (err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data);
        }
        // j++;
        callback1();
    });
},function(err){

});


////OR
//  var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0

//     function printResults () {
//       for (var i = 0; i < 3; i++) {
//         console.log(results[i])
//       }
//     }

//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err) {
//             return console.error(err)
//           }

//           results[index] = data.toString()
//           count++

//           if (count === 3) {
//             printResults()
//           }
//         }))
//       })
//     }

//     for (var i = 0; i < 3; i++) {
//       httpGet(i)
//     }