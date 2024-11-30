const express = require('express')
const app = express();
const PORT = 4000;
const path = require('path');
const server = app.listen(PORT, ()=> console.log(`🗨️ server running on port http://localhost:${PORT}`));
const io = require('socket.io')(server)


app.use(express.static(path.join(__dirname, 'public')))

let socketConnected = new Set();

io.on('connection', onConnect);


function onConnect(socket){
    console.log(socket.id)
    socketConnected.add(socket.id)

    io.emit('clients-total', socketConnected.size)

    socket.on('disconnect', () => {
        console.log('socket disconnected', socket.id)
        socketConnected.delete(socket.id)
        io.emit('clients-total', socketConnected.size)
    })

    socket.on('message', (data) =>{
        console.log(data)
        socket.broadcast.emit('chat-message', data)
    })

    socket.on('feedback', (data) => {
        socket.broadcast.emit('feedback', data)
    })
    
}