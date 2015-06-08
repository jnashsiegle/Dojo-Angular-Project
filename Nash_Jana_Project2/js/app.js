/**
 * Created by janasiegle on 6/7/15.
 */


var myApp = angular.module('myApp', []); //names the app and creates the app

myApp.controller('DBController', function ($scope) { //make the controller and name it
    console.log("in the controller"); //are we in the controller?  y/n
    $scope.newEmployee; //create new item
    console.log("about to add an item to our list"); //another error check
    //List Items
    $scope.employees; //pre-filled array moved to dataService.js


    //Add List Item
    $scope.addEmployee = function(){        
        dataService.addEmployee($scope.employees);


        $scope.employees = '';
    }

    $scope.removeEmployee = function(deletedEmployee){
       dataService.removeEmployee(deletedEmployee);
    
    }
});