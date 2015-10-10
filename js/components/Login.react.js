var React = require('react');
var PropTypes = React.PropTypes;

var ChatAppAction = require('../actions/ChatAppAction');

var Login = React.createClass({
  joinRoom: function(e){
    e.preventDefault();
    ChatAppAction.login({
      username: this.refs.username.value
    });
  },
  render: function() {
    return (
      <div className="login-box">
        <form onSubmit={this.joinRoom}>
          <input type="text" placeholder="Masukan nama panggilan kamu" ref="username"/>
        </form>
      </div>
    );
  }

});

module.exports = Login;
