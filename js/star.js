var Star = Entity.extend({
	radius: 50,
	color: "#FBEC5D",
	mass: 1000,
	
	constructor: function(o) {
		Star.super.constructor.call(this, o);
		
	},
	
	setup: function() {
		this.shape = new createjs.Shape();
		this.shape.graphics.beginFill(this.color).drawPolyStar(0, 0, this.radius, 10, 2, 0);
		
		this.shape.x = this.x;
		this.shape.y = this.y;
	},
	
	_xyz: null
});