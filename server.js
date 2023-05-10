const express = require('express')
const app = express();
const port = 4000
const server = app.listen(port, function () {
  console.log(`Listening on port ${port}`);
})
const { Server } = require("socket.io");
const io = new Server(server);
app.use(express.static('public'))
app.get('/hello', (req, res) => {
  res.send('Hello World')
})
io.on('connection', function (socket) {
  console.log('A user has connected');
  socket.on('chat-message', (message) => {
    // console.log(`message: ${message}`);
    io.emit('chat-message',message)
  })
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  })
})