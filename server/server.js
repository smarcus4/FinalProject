import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

const socket = require('socket.io');

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})
// const client = require('socket.io')(http).sockets;
// var app = require('express')();

var server = app.listen(config.port, function(){
  console.log('Server started on port %s.', config.port);
});

var io = socket(server);

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', function(data){
      io.emit('RECEIVE_MESSAGE', data);
  })
});

