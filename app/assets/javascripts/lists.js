// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() { 
		$('#new-list-button').click(function(evt) {
			$('#new-list-text').toggle();
			$('#never-mind-text').toggle();
			$('#new-list-form').toggle();
			// $('#never-mind-button').toggle();

			// $('#new-list-form').attr('style', '');
			



		});


	

		// $('a[data-confirm="Are you sure?"]').click(function(evt) {

		// 		console.log('clicked');
		// 		console.log(evt.target);

		// 		evt.target.attr('data-confirm', "Anger!"); 	

		// });
});