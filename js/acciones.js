// JavaScript Document
$(document).ready(function(e) {
	document.addEventListener( 'deviceready', function(){
		$('#btnvibrar').on('tap', function () {
			navigator.notication.vibrate(2000);
		});
	});
});