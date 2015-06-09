/**
 * Created by janasiegle on 6/7/15.
 */

/*Initiating Start of the App */
var App = angular.module('myApp', []); //names the app and creates the app

App.controller('DBController', function ($scope, dataService) { //make the controller and name it

    console.log("in the controller"); //are we in the controller?  y/n

    $scope.newName;  //create Name
    $scope.empStreet; //create Street
    $scope.empCity;  //create City
    $scope.empState; //create State
    $scope.empZip;  //create Zip

    $scope.employeesArray = dataService.getEmployees(); /* Pulling Employees from dataServices*/

    console.log($scope.employeesArray); //another error check



    //Add List Item
    $scope.addEmployee = function () {
        var employee = {
            "newName": $scope.newName,
            "empStreet": $scope.empStreet,
            "empCity": $scope.empCity,
            "empState": $scope.empState,
            "empZip": $scope.empZip
        };
        dataService.addEmployee(employee);



        /*Reset Input Fields to blank */
        $scope.newName = '';
        $scope.empStreet = '';
        $scope.empCity = '';
        $scope.empState = '';
        $scope.empZip = '';
    };

    /*Remove employee form array and records */

    $scope.deleteEmployee = function (deletedEmployee) {
        dataService.removeEmployee(deletedEmployee);

    };

    /*Reset */

    $scope.resetForm = function () {
        $scope.newName = '';
        $scope.empStreet = '';
        $scope.empCity = '';
        $scope.empState = '';
        $scope.empZip = '';
    };
});