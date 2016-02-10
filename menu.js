'use strict';

$(function(){
	$('.menu').find('li').each(function(e){
		var $li = $(this);
		$li.on('mouseenter touchstart', function(){
			$li.children('ul').show();
		});
		$li.on('mouseleave', function(){
			$li.children('ul').hide();
		});
	})
})
