const net = require('net');

const client = net.connect(8080, 'localhost',function () {
    console.log('Client Connected');
    client.write('Soham Tamhane\r\n');
});

client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});

client.on('end', function () {
    console.log('Server Disconnected');
});

client.on('error',function (err){
    console.error('connection error: ',err.message);
});

// Create React Frontend & connect to node backend as server & client. Message from client to server & server to client. Show this task at next APL practical.