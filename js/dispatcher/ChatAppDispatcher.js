var assign = require('object-assign');
Dispatcher = require('flux').Dispatcher;


var ChatAppDispatcher = assign(new Dispatcher(), {
  handleAction: function(action){
    this.dispatch({
      action: action
    });
  }
});

module.exports = ChatAppDispatcher;
