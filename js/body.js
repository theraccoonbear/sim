var Body = Entity.extend({
	radius: 10,
	orbits: false,
	color: '#04B404',
	mass: 100,
	
	constructor: function(o) {
		Body.super.constructor.call(this, o);
	},
	
	setup: function() {
		this.shape = new createjs.Shape();
		this.shape.graphics.beginFill(this.color).drawCircle(0, 0, this.radius);
		this.shape.x = this.x;
		this.shape.y = this.y;
	},
	
	tick: function(sim) {
		var v = this.vector;
		//var speed = v.speed;
		//var rads = v.angle * (Math.PI / 180);
		//var opp = Math.sin(rads) * speed;
		//var adj = Math.cos(rads) * speed;
		
		var deltas = this.vector.toCartesian();
		this.x += deltas.x;
		this.y += deltas.y;
		this.shape.x = this.x;
		this.shape.y = this.y;
		
		for (var i in sim.entities) {
			var ent = sim.entities[i];
			var dist = -this.distanceTo(ent);
			var angle = this.relativeAngle(ent);
			var deltas = this.deltas(ent);
			var rel_force = 1; //(this.mass / ent.mass);
			
			var grav_vec = new Vector({
				angle: angle,
				speed: rel_force
			});
			
			this.vector = this.vector.add(grav_vec);
			
			//console.log(dist, angle, deltas);
			
			//
			//var grav_vec = new Vector({x: deltas.x, y: deltas.y});
			//var per_drop = dist / 10;
			//var adj_vec = grav_vec.scale(per_drop);
		}
		
	},
	
	_xyz: null
});