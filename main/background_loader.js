// sets the background image for the page

var images = ['www.phillippopp.com/img/jp_fabric.jpg'];

function loadBackground()
{

	var bodyElements = document.getElementsByTagName("body");

	for (var i = 0; i < bodyElements.length; i++)
	{
		var imageNum = Math.round((Math.random() * (images.length - 1));
		var imagePath = "\"" + images[imageNum] + "\"";
		
		bodyElements[i].background = imagePath;
	}
}