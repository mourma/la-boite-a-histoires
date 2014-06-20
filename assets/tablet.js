var viewportHeight = $(window).height();
$('#container').height(viewportHeight);

 
var socket = io('http://192.168.100.57:3000');
socket.on('load slide', function(slide_id){
	console.log('slide'+slide_id);
	$( "#content" ).load('/assets/html/'+slide_id+'.html');
});
socket.on('reload', function(msg){
	document.location.reload();
});

var slides;
var universes;
var viewportHeight = $(window).height();
$(document).ready(function($){
  $.getJSON("/assets/slides.json", function(data){
    slides = data.slides;
  });
  
  $(document).on('click', '#content', function() {
	if ($(this).data('id') == 0)
	{
		socket.emit('show target');
		$('#content').unbind('click');
	}
  });
  $(document).on('click', '#content1', function() {
	//alert('content1');  
  });
  $(document).on('click', '#conte1 img', function() {
	// alert('toto');
		// socket.emit('load universes', {
			// a : "2", b : "2"
		// });
		socket.emit('load universes', {
			a : "2", b : "2"
		});
		socket.emit('load slide', 1);
	});
	$(document).on('click', '#conte2 img', function() {		
		socket.emit('load slide', 2);
	});
	$(document).on('click', '#conte3 img', function() {		
		socket.emit('load slide', 4);
	});
	$(document).on('click', '#conte3 img', function() {		
		socket.emit('load slide', 4);
	});
	$(document).on('click', '#conte4 img', function() {
		socket.emit('load universes', {
			a : "4", b : false
		});
		socket.emit('load slide', 5);
	});
	$(document).on('click', '#conte5 img', function() {
		socket.emit('load universes', {
			a : "3", b : false
		});
		socket.emit('load slide', 6);
	});
	$(document).on('click', '#conte6 img', function() {
		socket.emit('load slide', 7);
	});
	$(document).on('click', '#conte7 img', function() {
		socket.emit('load universes', {
				a : "5", b : false
			});
		socket.emit('load slide', 8);
	});
});