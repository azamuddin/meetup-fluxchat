var React = require('react');
var PropTypes = React.PropTypes;

var FriendListItem = React.createClass({

  render: function() {
    return (
      <div className="friend-list-item">
        {this.props.nama}
      </div>
    );
  }

});

module.exports = FriendListItem;
