define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var EventHandler = require('famous/core/EventHandler');
    // todo: look into how fastClick is being used.
    require('famous/inputs/FastClick');

    // Custom Modules
    var IntroView = require('IntroView');
    var mainContext = Engine.createContext();

    var introView = new IntroView(mainContext);

    //events
    var eventHandler = new EventHandler();
    eventHandler.subscribe(introView);

    eventHandler.on('mainViewStart', function() {
        console.log("heard back from intro"); 
    });




    mainContext.add(introView); 
});
