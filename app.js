var keypress = require('keypress');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('show target', function(msg){
    io.emit('show target', msg);
  });
   socket.on('load universes', function(msg){
    io.emit('load universes', msg);
  });
  socket.on('load slide', function(msg){
    io.emit('load slide', msg);
  });
});

http.listen(3000, function(){
  console.log('En attente sur *:3000');
});

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
	console.log(key.name);
  if (key && key.name == 'z') {
	io.emit('load universes', {
		a : "1", b : "1"
	});
	io.emit('load slide', 0);
  }
  if (key && key.name == 'q') {
	io.emit('load universes', {
		a : "3", b : false
	});
	io.emit('load slide', 3);
  }
 
  if (key && key.name == 'down') {
	io.emit('load universe', 1);
	// io.emit('load slide', 1);
  }
  if (key && key.name == 'g') {
	io.emit('reload', 1);
  }
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
