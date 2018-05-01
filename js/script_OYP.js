$(window).on('load', function() {

	// A. TITLE CARD
	// 1. Show title card
	// 2. Fade out after 2 seconds
	setTimeout(function() {
		$('#title_card').fadeOut();
	}, 2500);

		$(function() {
			
			// get the video
			// make offset
			// on scroll event, get position of scrollbar...
			// if position is below, add the pic in pic class
			var picInPic = $('.OYP_player');
			
		    var top = picInPic.offset().top - parseFloat(picInPic.css('margin-top')) + 670;
			
			$(window).on('scroll', function(event) {
				// what the y position of the scroll is
				var y = $(this).scrollTop();

				// check if scroll is below the video
				if (y >= top) {
					// if so, add the mini-box class
					if ( picInPic.is('.pic-in-pic') ) {
						return;
					}
					picInPic.addClass('pic-in-pic');
				} else {
					// otherwise remove it (scrolling back up)
					picInPic.removeClass('pic-in-pic');
				}
			});

				setTimeout(function() {
					document.getElementById("article").style.marginTop = 65 + "vh";
				}, 45000);

					$(window).scroll(function() {
					   if($(window).scrollTop() + $(window).height() == $(document).height()) {
					       var upNext = document.getElementById('up_next');
								upNext.style.visibility = "visible";
					   }
					});
		});




}); // end page load



// console.log ("great job team!")
// console.log ("show me the ZUUUUUCC")