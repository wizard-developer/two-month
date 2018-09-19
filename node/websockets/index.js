var express = require('express')
var app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'))
io.on('connection', function(socket){
  console.log('有用户连接了ws');

  socket.on('chat', (data) => {
    console.log(data, ' 有人发送信息了...')
    io.sockets.emit('chat', data);
  })

  socket.on('typing', data => {
    console.log(data)
    socket.broadcast.emit('typing', data)
  })
});

http.listen(4888, function(){
  console.log('listening on *:4888');
});

