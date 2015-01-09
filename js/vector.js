var Vector = Class.extend({
	angle: 0,
	speed: 0,
	
	constructor: function(o) {
		for (var p in o) {
			this[p] = o[p];
		}
	},
	
	
	toCartesian: function() {
		var ang = this.toRadians(this.angle);
		var dX = Math.cos(ang) * this.speed;
		var dY = Math.sin(ang) * this.speed;
		
		return {
			x: dX,
			y: dY
		}
	},
	
	fromCartesian: function(deltas) {
		var speed = Math.sqrt(Math.pow(deltas.x, 2) + Math.pow(deltas.y, 2));
		var angle = this.toDegrees(Math.asin(deltas.y / speed));
		return new Vector({
			angle: angle,
			speed: speed
		});
	},
	
	add: function(vec) {
		var cart_this = this.toCartesian();
		var cart_that = vec.toCartesian();
		var new_cart = {
			x: cart_this.x + cart_that.x,
			y: cart_this.y + cart_that.y,
		};
		
		return this.fromCartesian(new_cart);
	},
	
	toRadians: function(degrees) {
		return degrees * (Math.PI / 180);
	},
	
	toDegrees: function(radians) {
		return radians * (180 / Math.PI);
	},
	
	_xyz: null
});