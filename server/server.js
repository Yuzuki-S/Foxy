const path = require('path')
const express = require('express')
const request = require('superagent')
const db = require('./db/db')

const server = express()


server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/fox', (req, res) => {
  request.get('https://randomfox.ca/floof/')
  .then(ApiRes => { 
     res.json(ApiRes.body.image)
  })
  .catch(err => {
    console.log(err)
  })
})

server.get('/comics/', (req, res) => {
  db.getComics()
  .then(comics => { 
     res.json(comics)
  })
  .catch(err => {
    console.log(err)
  })
})

server.get('/quote', (req, res) => {
  request.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
  .then(ApiRes => { 
     res.json(ApiRes.body.message)
  })
  .catch(err => {
    console.log(err)
  })
})


// let io = require ('socket.io')(http);

// io.on('connection', function(socket){
//   socket.on('new-message', function(msg){
//     io.emit('receive-message', msg);
//   })
// })



module.exports = server
