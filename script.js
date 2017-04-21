$(document).ready(function() {
	var x = "x";
	var o = "o";
	var turns = 0;

	$("#board li").on("click", function() {
		

		if (checkWinner("o")) {

			// alert("Winner: O");
			$("#winner-message").fadeIn(500);
			remove();
			
		} else if (checkWinner("x")) {

			// alert("Winner: X");
			$("#winner-message").css('color', 'red');
			$("#winner-message").fadeIn(500);

			remove();
		
		} else if ($(this).hasClass("disable")) {
			$("#try-again").fadeIn(250).delay(1000).fadeOut(250);
		} else if (turns % 2 === 0) {
			turns++
			$(this).text(o)
			$(this).addClass("disable o");

			if (checkWinner("o")) {
				//alert("Winner: O");
				$("#winner-message").fadeIn(500);
				turns = 0;
				}
		} else {
				turns++
				$(this).text(x)
				$(this).addClass("disable x");

			if (checkWinner("x")) {
				$("#winner-message").css('color', 'red');
				$("#winner-message").fadeIn(500);
				turns = 0;
				}
			} 
		if (turns === 9) {
			
			$("#tie-message").fadeIn(500);
			
			turns = 0;

			}
		});

			// Reset Handler

			$("#reset").on("click", function() { 
				remove();
				turns = 0;
			});
});


function checkWinner(value) {

	var spot1 = $("#spot1");
	var spot2 = $("#spot2");
	var spot3 = $("#spot3");
	var spot4 = $("#spot4");
	var spot5 = $("#spot5");
	var spot6 = $("#spot6");
	var spot7 = $("#spot7");
	var spot8 = $("#spot8");
	var spot9 = $("#spot9");

	return spot1.hasClass(value) && spot2.hasClass(value) && spot3.hasClass(value) ||
	spot4.hasClass(value) && spot5.hasClass(value) && spot6.hasClass(value) ||
	spot7.hasClass(value) && spot8.hasClass(value) && spot9.hasClass(value) ||
	spot1.hasClass(value) && spot4.hasClass(value) && spot7.hasClass(value) ||
	spot2.hasClass(value) && spot5.hasClass(value) && spot8.hasClass(value) ||
	spot3.hasClass(value) && spot6.hasClass(value) && spot9.hasClass(value) ||
	spot1.hasClass(value) && spot5.hasClass(value) && spot9.hasClass(value) ||
	spot3.hasClass(value) && spot5.hasClass(value) && spot7.hasClass(value)
};	

function remove() {
	$("#winner-message").hide();
	$("#tie-message").hide();
	$("#winner-message").css('color', 'green');
	$("#tie-message").fadeOut(250);
	$("#board li").text("+");
	$("#board li").removeClass("disable");
	$("#board li").removeClass("x");
	$("#board li").removeClass("o");
}