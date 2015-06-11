/**
 * Created by janasiegle on 6/7/15.
 */

/*Initiating Start of the App */

var myApp = angular.module("myApp", []);
myApp.controller("DBController", function($scope,dataService) {

    $scope.employees = dataService.getEmployees();
    $scope.newEmployee = {};

    $scope.addNewEmployee = function () {
        dataService.saveEmployee($scope.newEmployee.name, $scope.newEmployee.position, $scope.newEmployee.email, $scope.newEmployee.street, $scope.newEmployee.city, $scope.newEmployee.state, $scope.newEmployee.zip);
        $scope.newEmployee = {};
    };

    $scope.removeEmp = function(idx){
        dataService.removeEmployeeAt(idx);
    };

    $scope.clearIt = function () {
        dataService.destroyLocalStorage();
    };

    $scope.reset = function() {
        $scope.newEmployee = angular.copy($scope.employees);
        if ($scope.myForm) $scope.myForm.$setPristine();
    };
    
    $scope.submitted = false;
    $scope.signupForm = function() {
    if ($scope.signup_form.$valid) {
      // Submit as normal
    } else {
      $scope.signup_form.submitted = true;
    }
  }


});