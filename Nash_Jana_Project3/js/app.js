/**
 * Created by janasiegle on 6/15/15.
 */

var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {
    //noinspection ChainedFunctionCallJS
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/viewContacts', {
            templateUrl: 'contacts.html',
            controller: 'ContactController'
        })
        .when('/viewChildren', {
            templateUrl:  'children.html',
            controller:  'ChildController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});


myApp.controller('HomeController', function($scope, $route){
    $scope.reloadRoute = function() {
        $window.location.reload();

    }
});

myApp.controller("ChildController", function($scope,dataService) { /*connect myApp to ChildController to dataservice*/

    $scope.children = dataService.getChildren();
    /*pull child info from dataservice*/
    $scope.newChild = {};

    $scope.addNewChild = function () {       /*function to create new child w/keys; save to LS*/
        dataService.saveChild($scope.newChild.name, $scope.newChild.age, $scope.newChild.gender);
        $scope.newChild = {};
    };

    $scope.removeChild = function (idx) {           /*call delete function from data service */
        dataService.removeChildAt(idx);
    };

    $scope.clearIt = function () {              /* call total clear of LS */
        dataService.destroyLocalStorage();
    };

    $scope.reset = function () {             /*reset form and clear all fields **does not destroy local info in storage*/
        $scope.newChild = angular.copy($scope.children);
        if ($scope.myForm) $scope.myForm.$setPristine();
    };

});
myApp.controller("ContactController", function($scope,dataService) { /*connect myApp to ContactController to
 dataservice*/

    $scope.contacts = dataService.getContact();
    /*pull contact info from dataservice*/
    $scope.newContact = {};

    $scope.addNewContact = function () {       /*function to create new child w/keys; save to LS*/
        dataService.saveContact($scope.newContact.name, $scope.newContact.phone, $scope.newContact.relation);
        $scope.newContact = {};
    };

    $scope.removeContact = function (idx) {           /*call delete function from data service */
        dataService.removeContactAt(idx);
    };

    $scope.clearIt = function () {              /* call total clear of LS */
        dataService.destroyLocalStorage();
    };

    $scope.reset = function () {             /*reset form and clear all fields **does not destroy local info in storage*/
        $scope.newContact = angular.copy($scope.contacts);
        if ($scope.myForm) $scope.myForm.$setPristine();
    };


});



