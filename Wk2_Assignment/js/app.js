/**
 * Created by janasiegle on 6/7/15.
 */


var myApp = angular.module ('myApp', []).controller("DBController", function ($scope, dataService){
    $scope.userName;

    $scope.nameArray = dataService.getNames();

    $scope.addName = function(){        
		dataService.addName($scope.userName);


        $scope.userName = '';
    }

    $scope.deleteName = function(deletedName){
       dataService.removeName(deletedName);
    
    }
});