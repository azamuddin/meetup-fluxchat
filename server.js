var express = require('express');
var app = express();
var lowdb = require('lowdb');
// var db = lowdb('server/db/todos.json');
var bodyParser = require('body-parser');
var cors = require('cors');
var uuid = require('uuid');
var assign = require('object-assign');
var _ = require('lodash');



app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
app.use(express.static(__dirname+'/'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});






var server = app.listen(7067, function(){
  console.log('listening at 7067');
});

var users = [];


var io = require('socket.io').listen(server);
io.on('connection', function(socket){
  
  socket.on('user_login', function(user){
    users.push(user);

    io.emit('user_login', user);
    io.emit('users_list_change', users);
  });

  socket.on('user_logout', function(user){
    usersList = _.remove(users, function(u){
      return u.username == user.username;
    });

    io.emit('user_logout', user);
    io.emit('users_list_change', users);
  });

  socket.on('receive_new_message', function(message){
    io.emit('receive_new_message_from_server', message);
  });



});
