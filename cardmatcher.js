
$(document).ready( function(){
	$("#grid-size").focus();
	// $('input[type=submit]').click( function(e) {
	$('#grid-size-submit').click( function(e){
		e.preventDefault();
		var size = $("#grid-size").val();
		console.log(size);
		matcherController.init(size);
		// $(this).closest('form').hide();
		$("#grid-size-form").hide();
		matcherView.updateGameView();
	});
} );


