/**
 * Created by janasiegle on 6/7/15.
 */

/*Initiating Start of the App */
var myApp = angular.module ('myApp', []);
myApp.controller("DBController", function ($scope, dataService){
    console.log("in the controller"); //are we in the controller?  y/n

    $scope.newName;
    $scope.empStreet;
    $scope.empCity;
    $scope.empState;
    $scope.empZip;

    $scope.employeesArray = dataService.getEmployees();  /* Pulling Employees from dataServices*/

    console.log($scope.employeesArray + "are employees"); //another error check



    //Add List Item
    $scope.addEmployee = function(){
        dataService.newEmployee($scope.newName, $scope.empStreet, $scope.empCity,
        $scope.empState, $scope.empZip);

    /*Reset Input Fields to blank */
        $scope.newName = '';
        $scope.empStreet = '';
        $scope.empCity = '';
        $scope.empState = '';
        $scope.empZip = '';
    };

    /*Remove employee form array and records */

    $scope.removeEmployee = function(deletedEmployee){
       dataService.removeEmployee(deletedEmployee);

    }
});