$(window).on('load', function() {

	// A. TITLE CARD
	// 1. show title card
	// 2. fade out after 2 seconds
	setTimeout(function() {
		$('#title_card').fadeOut()
	}, 2500)

	setTimeout(function(){
		$('#LIASS').fadeIn()
	}, 5000);

		// B. RELATED VIDEOS
		// 3. put all videos and corresponding thumbnails in an array
		// 4. put templates in an array
		// 5. on videoEnded, randomly choose between the 3 templates
		// 6. from the array, pull out videos and thumbnails and inject them into the corresponding box in the template

		// VIDEOS

		var arrRandomNumber = [
			"01",
			"02",
			"03",
			"04",
			"05",
			"06",
			"07",
			"08",
			"09",
			"10",
			"11",
			"12",
			"13",
			"14",
			"15",
			"16",
			"17",
			"18",
			"19",
			"20",
			"21",
			"22",
			"23",
			"24",
			"25",
			"26",
			"27",
			"28",
			"29",
			"30",
			"31",
			"32",
			"33",
			"34",
			"35",
			"36",
			"37",
			"38",
			"39",
			"40",
			"41",
			"42",
			"43",
			"44",
			"45",
			"46",
			"47",
			"48",
			"49",
			"50"
			// "51",
			// "52",
			// "53",
			// "54",
			// "55",
			// "56",
			// "57",
			// "58",
			// "59",
			// "60",
			// "61",
			// "62",
			// "63",
			// "64",
			// "65",
			// "66",
			// "67",
			// "68",
			// "69",
			// "70",
			// "71",
			// "72",
			// "73",
			// "74",
			// "75",
			// "76",
			// "77",
			// "78",
			// "79",
			// "80",
			// "81",
			// "82",
			// "83",
			// "84",
			// "85",
			// "86",
			// "87",
			// "88",
			// "89",
			// "90"
		];

		// TEMPLATES
		var arrRandomTemplate = [
			"col_2",
			"col_3",
			"col_6"
		];
	 	
		function shuffle(o) {
		    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		    return o;
		}

	 	// randomly choose a template
		var vid = document.getElementById('LIASS');
		console.log(vid.src);

		// start event listener
		vid.addEventListener("ended", showRelated, false);


		function showRelated() {

			var templateLIASS = arrRandomTemplate[Math.floor(Math.random() * arrRandomTemplate.length)];

			// choose a random type: 2, 3, 6
			// set the class of related_videos to correct class
			// clear contents of related_videos
			// for the number of videos that you need
			// append a div.thumbnail with an image inside
			// add video src to the data-video attribute of the image

			var relVids = document.getElementById('related_videos');
			relVids.style.visibility = 'visible'; // making it visibile
			relVids.className = templateLIASS; // setting class
			relVids.innerHTML = ""; // clearing related_videos div

			if ( relVids.className == "col_2" ) {

				var randomSrc = shuffle(arrRandomNumber);

				relVids.innerHTML = '<div id="col_2"> <div id="LIASS_' + randomSrc[0] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[0] + '.jpg" data-video="videos/LIASS_' + randomSrc[0] + '.mp4"></div><div id="LIASS_' + randomSrc[1] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[1] + '.jpg" data-video="videos/LIASS_' + randomSrc[1] + '.mp4"></div> </div>';

				console.log ( 'this is relVids inner html ' + relVids.innerHTML);

				hideVideo();

			} else if ( relVids.className == "col_3" ) {

				var randomSrc = shuffle(arrRandomNumber);
				
				relVids.innerHTML = '<div id="col_3"> <div id="LIASS_' + randomSrc[0] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[0] + '.jpg" data-video="videos/LIASS_' + randomSrc[0] + '.mp4"></div><div id="LIASS_' + randomSrc[1] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[1] + '.jpg" data-video="videos/LIASS_' + randomSrc[1] + '.mp4"></div><div id="LIASS_' + randomSrc[2] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[2] + '.jpg" data-video="videos/LIASS_' + randomSrc[2] + '.mp4"></div> </div>';

				hideVideo();

			} else if (relVids.className == "col_6" ) {

				var randomSrc = shuffle(arrRandomNumber);
				
				relVids.innerHTML = '<div id="col_3"> <div id="LIASS_' + randomSrc[0] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[0] + '.jpg" data-video="videos/LIASS_' + randomSrc[0] + '.mp4"></div><div id="LIASS_' + randomSrc[1] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[1] + '.jpg" data-video="videos/LIASS_' + randomSrc[1] + '.mp4"></div><div id="LIASS_' + randomSrc[2] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[2] + '.jpg" data-video="videos/LIASS_' + randomSrc[2] + '.mp4"></div><div id="LIASS_' + randomSrc[3] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[3] + '.jpg" data-video="videos/LIASS_' + randomSrc[3] + '.mp4"></div><div id="LIASS_' + randomSrc[4] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[4] + '.jpg" data-video="videos/LIASS_' + randomSrc[4] + '.mp4"></div><div id="LIASS_' + randomSrc[5] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[5] + '.jpg" data-video="videos/LIASS_' + randomSrc[5] + '.mp4"></div> </div>';

				hideVideo();
				
			} else {

				relVids.innerHTML = 'error';

			}

				console.log ( randomSrc );

				// NO REPEATS
				// console.log ( vid.src )

				// for (var i = 0; i < 6; i++) {

				// 	if ( randomSrc[i] == vid.src ) {

				// 	}
				// }


				// 7. HIDING RELATED
				// when an image inside of related_videos is clicked
				// hide related_videos
				function hideVideo(){

					var videosToHide = document.getElementById('related_videos');
					
					videosToHide.addEventListener('click', function(event) {

						videosToHide.style.visibility = "hidden";

					}, false);
						
				}

					function showingNewVideo() {

						relVids.addEventListener('click', function(event) {

							// grab the src from image that was clicked from the data-video attribute
							// set the src of the #LIASS to new source
							// trigger play
							var target = event.target;
							console.log(target);

							var source = target.dataset.video;
							console.log(source);
							vid.src = source;

						}, true);
					}

					showingNewVideo();


					// hiding sidebar if related viedeos show
					sidebar.style.visibility = "hidden";
		} // end big event listener


		function expandSidebar(){

			var expandingArrow = document.getElementById('expand');
			var sidebar = document.getElementById('sidebar');
			
			expandingArrow.addEventListener('click', function(event) {

				var randomSrc = shuffle(arrRandomNumber);

				sidebar.innerHTML = '<div id="LIASS_' + randomSrc[0] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[0] + '.jpg" data-video="videos/LIASS_' + randomSrc[0] + '.mp4"></div><div id="LIASS_' + randomSrc[1] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[1] + '.jpg" data-video="videos/LIASS_' + randomSrc[1] + '.mp4"></div><div id="LIASS_' + randomSrc[2] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[2] + '.jpg" data-video="videos/LIASS_' + randomSrc[2] + '.mp4"></div><div id="LIASS_' + randomSrc[3] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[3] + '.jpg" data-video="videos/LIASS_' + randomSrc[3] + '.mp4"></div><div id="LIASS_' + randomSrc[4] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[4] + '.jpg" data-video="videos/LIASS_' + randomSrc[4] + '.mp4"></div><div id="LIASS_' + randomSrc[5] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[5] + '.jpg" data-video="videos/LIASS_' + randomSrc[5] + '.mp4"></div><div id="LIASS_' + randomSrc[6] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[6] + '.jpg" data-video="videos/LIASS_' + randomSrc[6] + '.mp4"></div><div id="LIASS_' + randomSrc[7] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[7] + '.jpg" data-video="videos/LIASS_' + randomSrc[7] + '.mp4"></div><div id="LIASS_' + randomSrc[8] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[8] + '.jpg" data-video="videos/LIASS_' + randomSrc[8] + '.mp4"></div><div id="LIASS_' + randomSrc[9] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[9] + '.jpg" data-video="videos/LIASS_' + randomSrc[9] + '.mp4"></div><div id="LIASS_' + randomSrc[10] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[10] + '.jpg" data-video="videos/LIASS_' + randomSrc[10] + '.mp4"></div><div id="LIASS_' + randomSrc[11] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[11] + '.jpg" data-video="videos/LIASS_' + randomSrc[11] + '.mp4"></div><div id="LIASS_' + randomSrc[12] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[12] + '.jpg" data-video="videos/LIASS_' + randomSrc[12] + '.mp4"></div><div id="LIASS_' + randomSrc[13] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[13] + '.jpg" data-video="videos/LIASS_' + randomSrc[13] + '.mp4"></div><div id="LIASS_' + randomSrc[14] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[14] + '.jpg" data-video="videos/LIASS_' + randomSrc[14] + '.mp4"></div><div id="LIASS_' + randomSrc[15] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[15] + '.jpg" data-video="videos/LIASS_' + randomSrc[15] + '.mp4"></div><div id="LIASS_' + randomSrc[16] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[16] + '.jpg" data-video="videos/LIASS_' + randomSrc[16] + '.mp4"></div><div id="LIASS_' + randomSrc[17] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[17] + '.jpg" data-video="videos/LIASS_' + randomSrc[17] + '.mp4"></div><div id="LIASS_' + randomSrc[18] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[18] + '.jpg" data-video="videos/LIASS_' + randomSrc[18] + '.mp4"></div><div id="LIASS_' + randomSrc[19] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[19] + '.jpg" data-video="videos/LIASS_' + randomSrc[19] + '.mp4"></div><div id="LIASS_' + randomSrc[20] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[20] + '.jpg" data-video="videos/LIASS_' + randomSrc[20] + '.mp4"></div><div id="LIASS_' + randomSrc[21] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[21] + '.jpg" data-video="videos/LIASS_' + randomSrc[21] + '.mp4"></div><div id="LIASS_' + randomSrc[22] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[22] + '.jpg" data-video="videos/LIASS_' + randomSrc[22] + '.mp4"></div><div id="LIASS_' + randomSrc[23] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[23] + '.jpg" data-video="videos/LIASS_' + randomSrc[23] + '.mp4"></div><div id="LIASS_' + randomSrc[24] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[24] + '.jpg" data-video="videos/LIASS_' + randomSrc[24] + '.mp4"></div><div id="LIASS_' + randomSrc[25] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[25] + '.jpg" data-video="videos/LIASS_' + randomSrc[25] + '.mp4"></div><div id="LIASS_' + randomSrc[26] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[26] + '.jpg" data-video="videos/LIASS_' + randomSrc[26] + '.mp4"></div><div id="LIASS_' + randomSrc[27] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[27] + '.jpg" data-video="videos/LIASS_' + randomSrc[27] + '.mp4"></div><div id="LIASS_' + randomSrc[28] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[28] + '.jpg" data-video="videos/LIASS_' + randomSrc[28] + '.mp4"></div><div id="LIASS_' + randomSrc[29] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[29] + '.jpg" data-video="videos/LIASS_' + randomSrc[29] + '.mp4"></div><div id="LIASS_' + randomSrc[30] + '_SB" class="thumbnail_SB"><img src="images/LIASS_PIC_' + randomSrc[30] + '.jpg" data-video="videos/LIASS_' + randomSrc[30] + '.mp4"></div>';
	
				sidebar.style.visibility = "visible";
				// expandingArrow.style.visibility = "hidden";
				expandingArrow.style.transform = 'rotate('+180+'deg)'; 
				expandingArrow.style.right = "7.8vw";

				sidebar.addEventListener('click', function(event) {

						var sidebarSource = document.getElementById('LIASS_' + randomSrc[0] + '_SB');

						var target = event.target;

						var source = target.dataset.video;

						vid.src = source;

						// console.log( 'this is sidebar HTML ' + sidebar.innerHTML )
						console.log( target );
						console.log( source );
						console.log('LIASS_' + randomSrc[0] + '_SB');

					});
					

					expandingArrow.addEventListener('click', function(event) {
						expandingArrow.style.right = "0vw";
						sidebar.style.visibility = "hidden";
						expandingArrow.style.visibility = "visible";
						expandingArrow.style.transform = 'rotate('+0+'deg)'; 
						
					});


					

			}); // end event listener for arrow
						
		}

		expandSidebar();



		// UP NEXT (going to next page)
		// after 5 videos, display up next		
		function timesWatched() {

		// make a counter
		// 0 when page loads, watched videos = 0
		// every time someone watches a video, increment the counter
		// if counter hits 5, show up next
			var watchCount = 0;

			vid.addEventListener("playing", function() {

				watchCount++;

				console.log(watchCount)

			    if ( watchCount > 7 ) {	
			    	var upNext = document.getElementById('up_next');
			    	upNext.style.visibility = "visible";
			    }
			});

		}

		timesWatched();


}); // end page load



// console.log ("great job team!")
// console.log ("show me the ZUUUUUCC")