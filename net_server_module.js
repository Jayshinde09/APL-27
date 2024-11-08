const net = require('net');

const server = net.createServer(function (connection) {
    console.log('Client Connected');
    
    connection.on('end', function () {
        console.log('Client Disconnected');
    });

    connection.write('Hello World!\r\n');
    connection.pipe(connection);
});

server.listen(8080, function () {
    console.log('Server Listening on port 8080');
});

server.on('error', (err) => {
    console.error('Error:', err);
});