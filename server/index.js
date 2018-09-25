const {server} = require('./server')
const http = require('http').Server(server);
const io = require ('socket.io')(http);

const port = process.env.PORT || 3000

http.listen(port, function () {
  //eslint-disable-next-line no-console
  console.log('Listening on port', port)
})


io.on('connection', function(socket){
  socket.on('new-message', function(msg){
    io.emit('receive-message', msg);
  })
})


