var viewportHeight = $(window).height();
$('#container').height(viewportHeight);

 
 var socket = io('http://192.168.100.57:3000');
socket.on('load universes', function(universes){
	if (((universes.a !== false) && letter == 'A') || ((universes.b !== false) && letter == 'B'))
	{
		if (letter == 'B')
			id_screen = universes.b;
		else
			id_screen = universes.a;
		$('#content').html('<img src="/assets/img/decor/'+letter+id_screen+'.jpg" />');
	}
});
socket.on('show target', function() {
	if (id_screen == 'video1')
	{
		$('#content').html('<img src="/assets/img/loader.gif" id="loader" />');
	}
});
socket.on('reload', function(msg){
	document.location.reload();
});

var slides;
var universes;
var viewportHeight = $(window).height();
$(document).ready(function($){
  $.getJSON("/assets/universes.json", function(data){
    universes = data.universes;
  });
});