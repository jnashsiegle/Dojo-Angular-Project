/**
 * Created by janasiegle on 6/1/15.
 */


var myApp = angular.module('myApp', []); //names the app and creates the app

myApp.controller('MyController', function ($scope) { //make the controller and name it
    console.log("in the controller"); //are we in the controller?  y/n
    $scope.newItem; //create new item
    console.log("about to add an item to our list"); //another error check
    //List Items
    $scope.groceries = ['Bread', 'Milk', 'Eggs', 'Cottage Cheese', 'Almond Milk']; //pre-filled array


    //Add List Item
    $scope.addItem = function () {


        if ($scope.groceries.indexOf($scope.newItem) == -1) { //checking to see if the newItem is NOT on the
            // list
            $scope.groceries.push($scope.newItem);
            $scope.newItem = ''; //clears out the field after input

        } else {

            alert("This item is already on your list!."); //tell user duplicate item
            $scope.newItem = ''; //reset field
        }
    };


    //Remove List Item
    $scope.removeItem = function (item) { //create function to remove item from list
        var index = $scope.groceries.indexOf(item); //create index var to pinpoint where to change array
        //Code to be added here for validation      //not understanding what I am needing to add here as
        // everything works....
        $scope.groceries.splice(index, 1); //removes item referred to in index and loads array back in
    };
});



//function upperCaseFirstLetters(addGrocery) {              //was trying to work on code to convert inputs to
// captialization or adjust to all uppercase/lowercase to prevent case-sensitive duplication......
 //   var myTextObject = document.getElementById(addGrocery);
 //   myTextObject.value = myTextObject.value.replace(/\w\S*/g, function(txt) {
 //       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
//
 //   }