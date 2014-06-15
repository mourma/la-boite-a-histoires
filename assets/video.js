 var socket = io('http://192.168.100.57:3000');
 socket.on('load first universe', function(msg){
	console.log(msg);
	if (typeof slides_map[msg] != "undefined")
	{
		displaySlide(slides_map[msg]);
	}
});
var slides;
var viewportHeight = $(window).height();
$(document).ready(function($){
  $.getJSON("/assets/data.json", function(data){
    slides = data.slides;
	slides_map = data.slides_map;
	console.log(slides[0].image);
	$('#container').height(viewportHeight);
	$('#container').css('background-image', "url("+slides[0].image+")");
  });
  $.getJSON("/assets/universes.json", function(data){
    universes = data.universes;
  });
});

function displaySlide(id)
{
	slide = slides[id];
	if (typeof slide.page != "undefined")
	{
		if (!slide.page)
			$('#content').html('');
		else
			$( "#content" ).load(slide.page);
	}
	if (!slide.image)
		$('#container').css('background-image', 'none');
	else
		$('#container').css('background-image', "url("+slide.image+")");
}