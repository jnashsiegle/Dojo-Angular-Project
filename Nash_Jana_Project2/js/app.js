/**
 * Created by janasiegle on 6/7/15.
 */

/*Initiating Start of the App */

var myApp = angular.module("myApp", []);
myApp.controller("DBController", function($scope,dataService) { /*connect myApp to DBController to dataservice*/

    $scope.employees = dataService.getEmployees();  /*pull emp info from dataservice*/
    $scope.newEmployee = {};

    $scope.addNewEmployee = function () {       /*function to create new employee w/keys; save to LS*/
        dataService.saveEmployee($scope.newEmployee.name, $scope.newEmployee.position, $scope.newEmployee.email, $scope.newEmployee.street, $scope.newEmployee.city, $scope.newEmployee.state, $scope.newEmployee.zip);
        $scope.newEmployee = {};
    };

    $scope.removeEmp = function(idx){           /*call delete function from data service */
        dataService.removeEmployeeAt(idx);
    };

    $scope.clearIt = function () {              /* call total clear of LS */
        dataService.destroyLocalStorage();
    };

    $scope.reset = function() {             /*reset form and clear all fields **does not destroy local info in storage*/
        $scope.newEmployee = angular.copy($scope.employees);
        if ($scope.myForm) $scope.myForm.$setPristine();
    };


});