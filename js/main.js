var animateLine = function(canvas, colorNumber, pathString) {
	var line = canvas.path(pathString).attr({
		stroke: colorNumber
	});

	var length = line.getTotalLength();

	$('path[fill*="none"]').animate({
		'to': 1
	}, {
		duration: 5000,
		step: function(pos, fx) {
			var offset = length * fx.pos;
			var subpath = line.getSubpath(0, offset);
			canvas.clear();
			canvas.path(subpath).attr({
				stroke: colorNumber,
				"stroke-dasharray":"--",
				"stroke-width": '1.5'
			});
		}
	});
};

// Create path to be animated
var canvas = new Raphael('draw-1', 312.237, 383.163);
var pathString = "M117.537,382.28c0,0-181.187-309.888-92.683-365.854c82.927-52.439,127.42,41.415,127.42,41.415s82.335-93.854,150.628-32.878C360.509,76.396,117.537,382.28,117.537,382.28z";
animateLine(canvas, "#1F88C9", pathString);