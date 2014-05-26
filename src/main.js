define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Surface = require('famous/core/Surface');
    var StateModifier = require('famous/modifiers/StateModifier');

    // colors
    var NORMAL_STATE = "#fa5c4f";
    var PRESSED_STATE = "#f94536";

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    var logo = new ImageSurface({
        size: [true, true],
        content: './assets/stBenard.gif',
        classes: ['double-sided']
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

    // events
    helloSurface.on("mousedown", function() {
        helloSurface.setProperties({
            backgroundColor: PRESSED_STATE 
        });
    });    
    helloSurface.on("mouseup", function() {
        helloSurface.setProperties({
            backgroundColor: NORMAL_STATE 
        });
    });

    mainContext.add(centerSpinModifier).add(dogScale).add(logo);
    mainContext.add(centerMod).add(helloSurface);
});
