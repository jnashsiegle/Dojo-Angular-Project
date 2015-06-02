/**
 * Created by janasiegle on 6/1/15.
 */


var myApp = angular.module ('myApp', []);
    myApp.controller('MyController', function($scope){
          $scope.myName = ('Jana');

});

var anotherApp = angular.module('anotherApp', []);
    anotherApp.controller('AuthorController', function($scope) {
        $scope.author = {
            'aname': 'Jana Siegle',
            'title': 'Staff Author',
            'company': 'Full Sail'
        }
    });

        angular.element(document).ready(function () {
            angular.bootstrap(document.getElementById('anotherApp'), ['anotherApp']);


    });
