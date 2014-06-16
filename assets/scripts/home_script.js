$(document).ready(function() {

	$('.reloadDiv').click(function()
	{
		var link_name = $(this).attr('id');
   	$("#mainSection").load(link_name+".php", function(){
               $('#mainSection').css('height', ($(window).height() - 300));

         slideshow();

      });


	});




  
		
});
