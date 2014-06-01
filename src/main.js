define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var EventHandler = require('famous/core/EventHandler');
    var RenderController = require("famous/views/RenderController");
    // todo: look into how fastClick is being used.
    require('famous/inputs/FastClick');


    // Custom Modules
    var mainContext = Engine.createContext();


    // load the views
    var IntroView = require('IntroView');
    var introView = new IntroView();

    var MainView = require('MainView');
    var mainView = new MainView();

    var views = [];
    views[0] = introView;
    views[1] = mainView;

    viewController = new RenderController();
    mainContext.add(viewController); 
    viewController.show(views[0]);

    //events
    var eventHandler = new EventHandler();
    eventHandler.subscribe(introView);

    eventHandler.on('mainViewStartEvent', function() {
        viewController.show(views[1]);
    });
});
