// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() { 
		$('#new-list-button').click(function(evt) {
			$('#new-list-text').toggle();
			$('#never-mind-text').toggle();
			$('#new-list-form').toggle();
			
		});

		$('.ajax-edit').click(function(evt){
			evt.preventDefault(); 
			
			var get_url = evt.target.parentElement['href'];
			console.log(get_url);

			$.get(get_url, function( data ) {
 				 $( ".ajax-edit" ).html( data );
  				// alert( "Load was performed." );
			});

		});
});