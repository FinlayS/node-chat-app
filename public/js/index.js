var socket = io();

socket.on('connect', function()  {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'bob@2.com',
        text: 'You arseholes'
    });

});

socket.on('disconnect', function()  {
    console.log('Disconnected from server')
});

socket.on('newMessage', function (message) {
    console.log('New Message', message);
});

