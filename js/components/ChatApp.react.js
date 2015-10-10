var React = require('react');
var PropTypes = React.PropTypes;

var Header = require('./Header.react');
var FriendList = require('./FriendList.react');
var MessageBox = require('./MessageBox.react');
var LoginBox = require('./Login.react');

var ChatStore = require('./../stores/ChatStore');
var ChatAppAction = require('./../actions/ChatAppAction');
var SocketService = require('../SocketService');

getStateFromStore = function(){
  return {
    messagesBag: ChatStore.getAllMessage(),
    currentUser: ChatStore.getCurrentUser(),
    allUsers: ChatStore.getAllUsers()
  };
};

var ChatApp = React.createClass({
  getInitialState: function(){
    return getStateFromStore();
  },
  componentDidMount: function(){
    ChatStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    ChatStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState(getStateFromStore());
  },
  render: function() {
    if(!this.state.currentUser){
      return (
        <div className="chat-app">
          <Header />
          <LoginBox />
        </div>
      )
    }

    return (
      <div className="chat-app">
        <Header user={this.state.currentUser} />
        <FriendList users={this.state.allUsers} />
        <MessageBox
          messages={this.state.messagesBag}
          />
      </div>
    );
  }

});

module.exports = ChatApp;
