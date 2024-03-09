// $Id: general.js,v 1.9 2010/01/06 03:10:31 osborne Exp $


function init() {
	linkFloater();
	setInterval("linkFloater()",250);			
}

/**
 * Prompt user for confirmation prior to loading a URL.
 */
function confirmAction(url, msg) {
	if (confirm(msg)) {
		if (url) {
			document.location.href=url;
		}
		return true;
	}
	return false;
}

/**
 * Open window displaying help.
 */
function openHelp(url) {
	window.open(url, 'Help', 'width=700,height=600,screenX=100,screenY=100,toolbar=0,scrollbars=1');
}

/**
 * Open window displaying comments.
 */
function openComments(url) {
	window.open(url, 'Comments', 'width=700,height=600,screenX=100,screenY=100,toolbar=0,resizable=1,scrollbars=1');
}

/**
 * Open window for preview.
 */
function openWindow(url) {
	window.open(url, 'Window', 'width=600,height=550,screenX=100,screenY=100,toolbar=0,resizable=1,scrollbars=1');
}

/**
 * Open medium window.
 */
function openMediumWindow(url) {
	window.open(url, 'MediumWindow', 'width=800,height=700,screenX=100,screenY=100,toolbar=0,resizable=1,scrollbars=1');
}

/**
 * Open big window.
 */
function openBigWindow(url) {
	window.open(url, 'BigWindow', 'width=900,height=800,screenX=20,screenY=20,toolbar=0,resizable=1,scrollbars=1');
}

/**
 * Open very big window.
 */
function openVeryBigWindow(url) {
	window.open(url, 'VeryBigWindow', 'width=1100,height=1200,screenX=10,screenY=10,toolbar=0,resizable=1,scrollbars=1');
}

/**
 * Open window for reading tools.
 */
function openRTWindow(url) {
	window.open(url, 'RT', 'width=700,height=500,screenX=100,screenY=100,toolbar=0,resizable=1,scrollbars=1');
}
function openRTWindowWithToolbar(url) {
	window.open(url, 'RT', 'width=700,height=500,screenX=100,screenY=100,toolbar=1,resizable=1,scrollbars=1');
}

/**
 * browser object availability detection
 * @param objectId string of object needed
 * @param style int (0 or 1) if style object is needed
 * @return javascript object specific to current browser
 */
function getBrowserObject(objectId, style) {
	var isNE4 = 0;
	var currObject;

	// browser object for ie5+ and ns6+
	if (document.getElementById) {
		currObject = document.getElementById(objectId);
	// browser object for ie4+
	} else if (document.all) {
		currObject = document.all[objectId];
	// browser object for ne4
	} else if (document.layers) {
		currObject = document.layers[objectId];
		isNE4 = 1;
	} else {
		// do nothing
	}
	
	// check if style is needed
	if (style && !isNE4) {
		currObject = currObject.style;
	}
	
	return currObject;
}

/**
 * Load a URL.
 */
function loadUrl(url) {
document.location.href=url;	
}

/**
 * Display link to unscrambled email address
 **/
	function revealLink(reverseUser, reverseDomain, linktext)
		{
		document.write('<a href=' + 'mail' + 'to:' + reverse(reverseUser) + '@' + reverse(reverseDomain) + '>' + linktext + '<\/a>');
		}

/**
 * Display unscrambled email address
 **/
	function revealDisplay(reverseUser, reverseDomain)
		{
		document.write('<a href=' + 'mail' + 'to:' + reverse(reverseUser) + '@' + reverse(reverseDomain) + '>' + reverse(reverseUser) + '@' + reverse(reverseDomain) + '<\/a>');
		}

/**
 * Reverse string
 **/
	function reverse(string) {
		var s = "";
		var i = string.length;
		while (i>0) {
			s += string.substring(i-1,i);
			i--;
		}
		return s;
	}
