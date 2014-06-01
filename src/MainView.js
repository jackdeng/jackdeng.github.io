define(function(require, exports, module) {
	// import dependencies
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Surface = require('famous/core/Surface');
    var StateModifier = require('famous/modifiers/StateModifier');
   	var View = require('famous/core/View'); 
   	var RenderNode = require('famous/core/RenderNode');
   	var Transitionable = require('famous/transitions/Transitionable');
   	var TouchSync = require('famous/inputs/TouchSync');

   	function MainView() {
   		View.apply(this);

   		var foodButton, drinkButton, adventureButton;

   		var genericButtonHeight = 100;
   		var genericButtonWidth = 200; 

   		var genericButtonProperties = {
			color: "white",
			textAlign: "center",
			fontFamily: "helvetica",
			lineHeight: genericButtonHeight + "px",
			borderRadius: "6px"
		};

   		foodButton = new Surface({
   			content: "Chow time.",
   			size : [genericButtonWidth, genericButtonHeight], 
   			properties: _.extend({
   				backgroundColor: "#fa4f6d"
   			}, genericButtonProperties) 
   		});

   		drinkButton = new Surface({
   			content: "Chug time.",
   			size : [genericButtonWidth, genericButtonHeight], 
   			properties: _.extend({
   				backgroundColor: "#fa874f"
   			}, genericButtonProperties) 
   		});

   		adventureButton = new Surface({
   			content: "Adventure time!",
   			size : [genericButtonWidth, genericButtonHeight], 
   			properties: _.extend({
   				backgroundColor: "#fa5c4f"
   			}, genericButtonProperties) 
   		});

   		var foodModifier = new Modifier({
	        align: [0.5, 0.3],
	        origin: [0.5, 0.5]
	    });
	    var drinkModifier = new Modifier({
	        align: [0.5, 0.5],
	        origin: [0.5, 0.5]
	    });
	    var adventureModifier = new Modifier({
	        align: [0.5, 0.7],
	        origin: [0.5, 0.5]
	    });

	    // create the render tree nodes.
		this.mainNode = new RenderNode();
	    this.mainNode.add(foodModifier).add(foodButton);
	    this.mainNode.add(drinkModifier).add(drinkButton);
	    this.mainNode.add(adventureModifier).add(adventureButton);
	    this.add(this.mainNode);


	    // events
	    var touch = new TouchSync();
	    foodButton.pipe(touch);
	    drinkButton.pipe(touch);
	    adventureButton.pipe(touch);

	    touch.on('start', function(event, a, b, c){
	    	var anEvent = event;
	    });
   	}

   	MainView.prototype = Object.create(View.prototype);
   	MainView.prototype.constructor = MainView;

   	module.exports = MainView;
});