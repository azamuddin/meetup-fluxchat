var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var $ = require('jquery');

var ChatStore = require('../stores/ChatStore');

var ChatAppAction = {
  sendMessage: function(data){
    ChatAppDispatcher.handleAction({
      type: 'RECEIVE_NEW_MESSAGE',
      message: data
    });
  },
  login: function(user){
    ChatAppDispatcher.handleAction({
      type: 'USER_LOGIN',
      user: user
    });
  },
  logout: function(){
    ChatAppDispatcher.handleAction({
      type: 'USER_LOGOUT',
      user: ChatStore.getCurrentUser()
    });
  }
};

module.exports = ChatAppAction;
