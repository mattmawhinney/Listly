// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).on('page:change', ready);

function ready(){

	$('#new-button').click(function(evt) {


			$('#new-text').toggle();
			$('#never-mind-text').toggle();
			$('#new-form').toggle();
			
		});

}

$(function() { 
		

		$('.ajax-edit').click(function(evt){
			evt.preventDefault(); 
			// alert( "Load was performed." );
			var parent_element = evt.target.parentElement;
			var grandparent_element = parent_element.parentElement;
			var get_url = parent_element['href'];

			// console.log(get_url);
			// console.log(grandparent_element);
			$(parent_element).attr('href', '#' );

			$.get(get_url, function( data ) {
					// console.log(grandparent_element);
				 
 				 $(grandparent_element).html( data );
 				 
 				

			});

		});
});