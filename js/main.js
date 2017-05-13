$(document).ready(function(){
	console.log('doc is ready6');
	$("#header .menu-icon").click(function(){
		$("#header .navigation").stop(false,false).slideToggle(1000);
	});
});