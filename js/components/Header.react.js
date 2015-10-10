var React = require('react');
var PropTypes = React.PropTypes;

var ChatAppAction = require('../actions/ChatAppAction');

var Header = React.createClass({
  logout: function(){
    ChatAppAction.logout();
  },
  render: function() {
    logoutButton = '';
    if(this.props.user){
      logoutButton = (<a className="logout-btn" onClick={this.logout}>logout</a>)
    }
    return (
      <div className="header">
        <h2>Chat App</h2>
        {logoutButton}
        <hr />
      </div>
    );
  }

});

module.exports = Header;
