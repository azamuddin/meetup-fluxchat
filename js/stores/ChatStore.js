var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');


_currentUser = null;
_allUsers = [];
_messagesBag = [];

var io = require('socket.io-client');



var CHANGE_EVENT = 'change';
var ChatStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  getCurrentUser: function(){
    return _currentUser;
  },
  getAllUsers: function(){
    return _allUsers;
  },
  getAllMessage: function(){
    return _messagesBag;
  },
  addMessage: function(message){
    _messagesBag.push(message);
  },
  setCurrentUser: function(user){
    _currentUser = user;
  },
  setAllUsers: function(users){
    _allUsers = users;
  }
});

var socket = io();

socket.on('user_login', function(user){
  ChatStore.addMessage({author: 'system', text: user.username + ' has joined the room'});
  ChatStore.emitChange();
});

socket.on('user_logout', function(user){
  ChatStore.addMessage({author: 'system', text: user.username + ' has left the room'});
  ChatStore.emitChange();
});

socket.on('users_list_change', function(users){
  ChatStore.setAllUsers(users);
  ChatStore.emitChange();
});

socket.on('receive_new_message_from_server', function(message){
  if(message.text == ''){
    return;
  }
  ChatStore.addMessage(message);
  ChatStore.emitChange();
});




ChatStore.dispatchToken = ChatAppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.type) {
    case 'USER_LOGIN':
      socket.emit('user_login', action.user);
      ChatStore.setCurrentUser(action.user);
      ChatStore.emitChange();
      break;
    case 'USER_LOGOUT':
      socket.emit('user_logout', action.user);
      ChatStore.setCurrentUser(null);
      ChatStore.setAllUsers([]);
      ChatStore.emitChange();
      break;
    case 'RECEIVE_NEW_MESSAGE':
      socket.emit('receive_new_message', action.message);
      if(action.message.text == ''){
        return;
      }
      ChatStore.emitChange();
      break;
    default:
    // do nothing
  }
});


module.exports = ChatStore;
