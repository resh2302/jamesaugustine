
// var $jq = $.noConflict();

$(document).ready(function(){
	// add code to keep scrollbar true always.. flickers on slidetoggle otherwise
	$('.content').hide();
	$('#home_content').show();

	$('.mnu_item').click(function(e){
		e.preventDefault();
		$('.nav li').removeClass('active');
		$(this).parent().addClass('active');

		$('.content').css('display','none');
		var contentID = $(this).attr("href");
		$(contentID).slideToggle(5000);
	});
});
