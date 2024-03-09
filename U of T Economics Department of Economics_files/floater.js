// $Id: floater.js,v 1.5 2007/04/25 18:36:04 spuopolo Exp $

function linkFloater() {
	var linkFloater = document.getElementById("linkFloater");	
	
	if(navigator.appVersion.match("MSIE 6.0")) {
		var doc = document.body;
		positionType = "absolute";
		var offset = doc.scrollTop;		
		var wheight = doc.clientHeight + offset;
	}	else {
		var doc = document.documentElement;
		positionType = "fixed";
		var offset = doc.scrollTop;
		var wheight = doc.clientHeight;		
	}
	
	var wwidth = doc.clientWidth;

	linkFloater.style.left = (wwidth - 100) + "px";
	linkFloater.style.top = (wheight - 25) + "px";
	linkFloater.style.position = positionType;
			
	if(offset == "0" ) {
		linkFloater.style.display = "none";
	} else {
  	linkFloater.style.display = "block";
	}
}	
