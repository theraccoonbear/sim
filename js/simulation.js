var Simulation = Class.extend({
	stage: null,
	entities: [],
	
	constructor: function(o) {
		Simulation.super.constructor.call(this, o);
		this.$canvas = $('#canvas');
		this.stage = new createjs.Stage("canvas");
		this.hooks();
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
	
	resizeCanvas: function() {
		var d = this.dim();
		this.$canvas.get(0).width = d.width;
		this.$canvas.get(0).height = d.height;
		console.log('resize: ' + d.width + 'x' + d.height);
		//this.drawBG();
		this.update();
	},
	
	hooks: function() {
		var ctxt = this;
		
		$(window).on('resize', function() { ctxt.resizeCanvas(); });
		ctxt.resizeCanvas();
		
		createjs.Ticker.addEventListener("tick", function() { ctxt.tick(); });
	},
	
	tick: function() {
		for (var i = 0, l = this.entities.length; i < l; i++) {
			this.entities[i].tick(this);
		}
		this.update();
	},
	
	init: function() {
		this.drawBG();
		this.update();
	},
	
	drawBG: function() {
		var d = this.dim();
		var graphics = new createjs.Graphics().beginFill("#000000").drawRect(0, 0, d.width, d.height);
		this.bg = new createjs.Shape(graphics);
		this.stage.addChild(this.bg);
	},
	
	update: function() {
		this.stage.update();
	},
	
	add: function(ent) {
		this.entities.push(ent);
		this.stage.addChild(ent.shape);
		this.update();
	},
	
	_xyz: null
});