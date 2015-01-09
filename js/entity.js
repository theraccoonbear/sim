var Entity = Class.extend({
	stage: null,
	x: false,
	y: false,
	shape: null,
	color: "#FFFFFF",
	mass: 0,
	vector: false,
	
	constructor: function(o) {
		for (var p in o) {
			this[p] = o[p];
		}
		
		var mid = this.midpoint();
		
		if (this.x === false) { this.x = mid.x; }
		if (this.y === false) { this.y = mid.y; }
		if (this.vector === false) { this.vector = new Vector({x: 0, y: 0}); }
		this.init();
	},
	
	init: function() {
		if (typeof this.setup === 'function') {
			this.setup();
		}
	},
	
	dim: function() {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	},
	
	midpoint: function() {
		var d = this.dim();
		return {
			x: d.width / 2,
		  y: d.height / 2
		};
	},
	
	tick: function() {
		
	},
	
	relPos: function(dX, dY) {
		return {
			x: this.x + dX,
			y: this.y + dY
		};
	},
	
	deltas: function(ent) {
		return {
			x: ent.x - this.x,
			y: ent.y - this.y
		};
	},
	
	distanceTo: function(ent) {
		//var deltas = this.vector.toCartesian();
		var delta_x = Math.abs(ent.x - this.x);
		var delta_y = Math.abs(ent.y - this.y);
		return Math.sqrt(Math.pow(delta_x, 2) + Math.pow(delta_y, 2));
	},
	
	relativeAngle: function(ent) {
		var adj = ent.x - this.x;
		var opp = ent.y - this.y;
		var hyp = this.distanceTo(ent);
		return this.toDegrees(Math.atan2(opp, adj));
	},
	
	toRadians: function(degrees) {
		return degrees * (Math.PI / 180);
	},
	
	toDegrees: function(radians) {
		return radians * (180 / Math.PI);
	},
	
	_xyz: null
});