$(document).ready(function() {
	showMenu();
})

function showMenu() {
	$(".a").click(function() {
		$(".myMenu").slideToggle();
	})
}