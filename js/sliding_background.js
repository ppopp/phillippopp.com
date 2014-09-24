
function attach_sliding_background(selector) {
	var num_bars = $(window).height() / 50;
	var max_height = 100;
	var min_height = 10;
	var min_time = 2000;
	var max_time = 20000;
	var stop_prob = 0.001;
	var stop_prob_mult = 2.0;
	function resize() {
	   $(selector + " .bg_bar").remove();
	   for (var i = 0; i < num_bars; i++) {
		   $(selector).append("<div class=\"bg_bar\"></div>");
	   }
	   function rand_between(minVal, maxVal) {
		   return Math.random() * (maxVal - minVal) + minVal;
	   }
	   var bars = $(selector + " .bg_bar");
	   for (var i = 0; i < bars.length; i++) {
		   var newHeight = rand_between(min_height, max_height);
		   $(bars[i]).height(newHeight);
		   $(bars[i]).css("top", Math.random() * $(window).height());
	   }
	   function turn_around() {
		   var dur = rand_between(min_time, max_time);
		   var pos = 0;
		   if (parseFloat($(this).css("top")) <= 1) {
				if (Math.random() < stop_prob) {
					   return;
				}
			   pos = $(window).height();
		   }
		   else {
		   	stop_prob *= stop_prob_mult;
		}
		   $(this).animate({"top":pos},
						   {"duration":dur,
						   "complete":turn_around});
	   }
	   for (var i = 0; i < bars.length; i++) {
		   var dir = Math.random() > 0.5;
		   var dur = rand_between(min_time, max_time);
		   var pos = 0;
		   if (dir) {
			   pos = $(window).height();
		   }
	
		   $(bars[i]).animate({"top":pos},
							  {"duration":dur,
							  "complete":turn_around});
	   }
	}
	resize();
}