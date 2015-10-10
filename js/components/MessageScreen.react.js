var React = require('react');
var PropTypes = React.PropTypes;

var MessageScreen = React.createClass({
  getDefaultProps: function(){
    return {
        messages: [
          {author: 'bill', text: 'Helo world', time: 'timestamp'},
          {author: 'jack', text: 'Alright', time: 'timestamps'}
        ]
    };
  },
  render: function() {
    return (
      <div className="message-screen">
        {this.props.messages.map(function(message, i){
          return (
            <div key={i} className="message">
              <span className="author">{message.author}</span>
              <span className="text">{message.text}</span>
            </div>
          )
        })}
      </div>
    );
  }

});

module.exports = MessageScreen;
