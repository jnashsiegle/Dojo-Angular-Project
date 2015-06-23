/**
 * Created by janasiegle on 6/1/15.
 Testing DOJO
 */


/*======== -1- =========*/
/*require([
    'dojo/dom',  //basic Dojo module
    'dojo/dom-construct'  //basic Dojo module
    ], function(dom, domConstruct){
        var greetingNode = dom.byId('greeting');
        domConstruct.place('<em> Texas!</em>', greetingNode);
    }); */

/* ======== -2- ==========*/
/*require([
    'dojo/dom',
    'dojo/domReady!' //adding an ! calls a plugin without it this would simply be a module, this PI stops the module from firing until the Dom is ready
    ], function(dom){
        var greeting = dom.byId('greeting');
        greeting.innerHTML += ' from Texas!';
}); */

/* ======= -3- =======*/
require([
    'dojo/dom',
    'dojo/fx',
    'dojo/domReady!'
], function(dom,fx) {
    //from above
    var greeting = dom.byId('greeting');
    greeting.innerHTML += ' From Texas!';

    //with animation
    fx.slideTo({
        node: greeting,
        top: 100,
        left: 200
    }).play(7000);
}); 

