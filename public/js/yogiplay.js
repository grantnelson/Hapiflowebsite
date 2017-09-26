'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	var isPlaying = false;
	var isPaused = false;
	var audio = new Audio('finaladv.m4a');
    function redirectHandler() {
        window.location = 'https://docs.google.com/forms/d/1mlCeju7x7fEmZLXblYn6pI7jzRlL_q3JoZEGmfFefgY/viewform?edit_requested=true';
    }

audio.addEventListener('ended', redirectHandler, false);
	console.log("Playing file")
	$("#pause").hide();
	$("#play").click(function(e) {
		var time = $("#time option:selected").text();
		console.log("profile/" + time);

		$.get("/profile/" + time, addFlowsdone);
		audio.play();
		isPlaying = true;
		$("#play").hide();
		$("#pause").show();
	})	

	if(isPlaying = true){
		$("#pause").click(function(e) {
			audio.pause();
			isPlaying = false;
			isPaused = true;
			$("#play").show();
			$("#pause").hide();
		})
	}	else if(isPaused = true){
		$("play").click(function(e) {
			audio.play();
			isPlaying = true;
			isPaused = false;
			$("#play").hide();
			$("#pause").show();
		})
	}	

function addFlowsdone(e){
	console.log("Flows will be added");

}

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}