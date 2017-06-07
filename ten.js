var net = require('net');


var server = net.createServer(function (socket) {



    var date = new Date();

    var month = date.getMonth() + 1;

    date = date.getFullYear() + '-' + padding(month) + '-' + padding(date.getDate()) + ' ' + padding(date.getHours()) + ':' + padding(date.getMinutes());

    socket.write(date +'\n');

    socket.end();

});

server.listen(process.argv[2], function () {
    //console.log('2');
});

function padding(a) {
    if (a < 10) {
        a = '0' + a;
    }
    return a;
}




