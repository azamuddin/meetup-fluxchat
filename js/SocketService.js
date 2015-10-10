var io = require('socket.io-client');
var ChatAppAction = require('./actions/ChatAppAction');

SocketService = {
  connect: function(){
    socket = io();
    socket.on('user_login', function(){
      alert('user login');
    });
  },
  emit: function(type, data){
    socket.emit(type, data);
  }
};
module.exports = SocketService;
