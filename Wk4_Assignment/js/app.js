/**
 * Created by janasiegle on 6/1/15.
 Testing DOJO
 */

Old DOJO
/*===== -1- POPUP ALERT FOR DOJO READY AND VERSION ID =====*/
/*dojo.ready(function(){
    alert("Dojo version " + dojo.version + " isloaded");
}); */


/*===== -2- appends the same as above but in an innerHTML string ===*/
/*dojo.ready(function(){
    dojo.byId("greeting").innerHTML += ", from " + dojo.version; //append Dojo version string to the innerHTML property
}) ; */

/* === -3- define a named function to pass for multi calls if desired (there can be as many calls to dojo as liked and are processed in order provided) === */
/*function init(){
    alert("Dojo ready, version:" + dojo.version);
}
dojo.ready(init); */

/* === -4- add animation to -3- which is included in the dojo "base" using the same code as above with one addition ===*/

//NEW
dojo.require("dojo.fx");
//same as above below
dojo.ready(function(){
    dojo.byId("greeting").innerHTML += ", from " + dojo.version;
    //but now we are going to add the greetings slide animation attr's that will cause the text to slide down from top left down and right 
    dojo.fx.slideTo({
        top: 100,
        left: 200,
        node: dojo.byId("greeting")
    }).play();
});
    



