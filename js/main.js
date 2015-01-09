$(function() {
	
	var $canvas = $('<canvas></canvas>');
	$canvas
		.attr('id', 'canvas');
		
	$('#mainArea').append($canvas);
	
	var sim = new Simulation();
	sim.init();
	var star = new Star({radius: 40});
	sim.add(star);
	var body_pos = star.relPos(100, 20);
	//sim.add(new Body({x: body_pos.x, y: body_pos.y, vector: new vector({speed: 10, angle: 25})}));
	sim.add(new Body({
		x: body_pos.x,
		y: body_pos.y,
		vector: new Vector({
			angle: 90,
			speed: 10
		})
	}));
	
	
	
});