import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

const socket = require('socket.io');
// let server = require('http').Server(app);
// let io = require('socket.io')(server);
// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})

// app.listen(config.port, function(){
//   console.log('Server started on port %s.', config.port);
// });

// let users = {};

// var getUsers = () => {
//     return Object.keys(users).map(function(key){
//         return users[key].username
//     });
// };

// var createSocket = (user) => {
//     let cur_user = users[user.uid],
//         updated_user = {
//             [user.uid] : Object.assign(cur_user, {sockets : [...cur_user.sockets, user.socket_id]})
//         };
//     users = Object.assign(users, updated_user);
// };

// var createUser = (user) => {
//     users = Object.assign({
//         [user.uid] : {
//             username : user.username,
//             uid : user.uid,
//             sockets : [user.socket_id]
//         }
//     }, users);
// };

// var removeSocket = (socket_id) => {
//     let uid = '';
//     Object.keys(users).map(function(key){
//         let sockets = users[key].sockets;
//         if(sockets.indexOf(socket_id) !== -1){
//             uid = key;
//         }
//     });
//     let user = users[uid];
//     if(user.sockets.length > 1){
//         // Remove socket only
//         let index = user.sockets.indexOf(socket_id);
//         let updated_user = {
//             [uid] : Object.assign(user, {
//                 sockets : user.sockets.slice(0,index).concat(user.sockets.slice(index+1))
//             })
//         };
//         users = Object.assign(users, updated_user);
//     }else{
//         // Remove user by key
//         let clone_users = Object.assign({}, users);
//         delete clone_users[uid];
//         users = clone_users;
//     }
// };

// io.on('connection', (socket) => {
//     let query = socket.request._query,
//         user = {
//             username : query.username,
//             uid : query.uid,
//             socket_id : socket.id
//         };

//     if(users[user.uid] !== undefined){
//         createSocket(user);
//         socket.emit('updateUsersList', getUsers());
//     }
//     else{
//         createUser(user);
//         io.emit('updateUsersList', getUsers());
//     }

//     socket.on('message', (data) => {
//         console.log(data);
//         socket.broadcast.emit('message', {
//             username : data.username,
//             message : data.message,
//             uid : data.uid
//         });
//     });

//     socket.on('disconnect', () => {
//         removeSocket(socket.id);
//         io.emit('updateUsersList', getUsers());
//     });
// });

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

