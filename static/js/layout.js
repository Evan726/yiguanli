
define(["jquery"],function($){
	var layout = function(){
		var window_H = $(window).height();
		var header_H = $("#header").height();
		$("#sidebar").height(window_H-header_H);
	};
	return {
		layout:layout
	}
});
