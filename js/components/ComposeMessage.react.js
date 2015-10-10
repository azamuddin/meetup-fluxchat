var React = require('react');
var PropTypes = React.PropTypes;

var ChatAppAction = require('../actions/ChatAppAction');
var ChatStore = require('../stores/ChatStore');

var ComposeMessage = React.createClass({
  sendMessage: function(e){
    e.preventDefault();
    ChatAppAction.sendMessage({
      author: ChatStore.getCurrentUser().username,
      text: this.refs.messageText.value
    });
    this.refs.messageText.value = '';
  },
  render: function() {
    return (
      <div className="compose-message">
        <form onSubmit={this.sendMessage}>
          <input type="text" placeholder="kirim pesan" ref="messageText"/>
        </form>
      </div>
    );
  }

});

module.exports = ComposeMessage;
