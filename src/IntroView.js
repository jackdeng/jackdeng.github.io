define(function(require, exports, module){
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

    // colors
    var NORMAL_STATE = "#fa5c4f";
    var PRESSED_STATE = "#f94536";

    function IntroView() {
    	View.apply(this);

		// your app here
	    var logo = new ImageSurface({
	        size: [true, true],
	        content: './assets/stBenard.gif'
	    });

	    var centerSpinModifier = new Modifier({
	        align: [0.5, 0.4],
	        origin: [0.5, 0.4]
	    });

	    var centerMod = new StateModifier ({
	        align: [0.5, 0.7], 
	        origin: [0.5,0.7]
	    });

	    var dogScale = new StateModifier({
	        transform: Transform.scale(0.5, 0.5, 1)
	    })

	    var helloSurface = new Surface ({ 
	        size: [100, 100], 
	        content: "Hello Godot",
	        properties: {
	            backgroundColor: NORMAL_STATE,
	            color: "white",
	            textAlign: "center",
	            fontFamily: "helvetica",
	            lineHeight: "100px",
	            borderRadius: "50%"
	        }
	    });

	    this.mainNode = new RenderNode();
	    this.mainNode.add(centerSpinModifier).add(dogScale).add(logo);
	    this.mainNode.add(centerMod).add(helloSurface);

	    this.add(this.mainNode);

	    // events
	    var touch = new TouchSync();
	    helloSurface.pipe(touch);

	    touch.on('start', function() {
	        helloSurface.setProperties({
	            backgroundColor: PRESSED_STATE 
	        });
	    });    

	    // bind this to be this current view on callback.
	    touch.on('end', _.bind(function() {
	        helloSurface.setProperties({
	            backgroundColor: NORMAL_STATE 
	        });
	        // do something with the main context.
	        this._eventOutput.emit('mainViewStartEvent');
	    }, this));
    }

    // create the constructor for IntroView. 
    // Object.create creates a new object with the specified prototype object
    // change the construcotr to be IntroView such that we can call
    // "new" on it. 
    IntroView.prototype = Object.create(View.prototype);
    IntroView.prototype.constructor = IntroView;

    module.exports = IntroView;
})