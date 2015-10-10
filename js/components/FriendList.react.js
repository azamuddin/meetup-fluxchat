var React = require('react');
var PropTypes = React.PropTypes;

var FriendListItem = require('./FriendListItem.react');

var FriendList = React.createClass({

  render: function() {
    return (
      <div className="friend-list">
        {this.props.users.map(function(user, i){
          return (<FriendListItem key={i} nama={user.username} />)
        })}
      </div>
    );
  }

});

module.exports = FriendList;
