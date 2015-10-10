var React = require('react');
var PropTypes = React.PropTypes;

var MessageScreen = require('./MessageScreen.react');
var ComposeMessage = require('./ComposeMessage.react');

var MessageBox = React.createClass({

  render: function() {
    return (
      <div className="message-box">
        <MessageScreen
          messages={this.props.messages}
          />
        <ComposeMessage />
      </div>
    );
  }

});

module.exports = MessageBox;
