/**
 * Created by janasiegle on 6/1/15.
 */


var myApp = angular.module ('myApp', []);           //names app and creates module
    myApp.controller('MyController', function($scope){      //make the controller and name
          $scope.newItem;                                   //create new item
          
        //List Items
        $scope.groceries = ['Bread', 'Milk', 'Eggs', 'Cottage Cheese', 'Almond Milk'];  //pre-filled array

        //Add List Item
        $scope.addItem = function(){                //create function for adding an item
            //code to be added here for validation
            $scope.groceries.push($scope.newItem);
            $scope.newItem = '';                    //clears out the field after input
        };
        //Remove List Item
        $scope.removeItem = function(item){         //create function to remove item from list
            var index = $scope.groceries.indexOf(item);   //create index var to pinpoint where to change array
            //Code to be added here for validation
                $scope.groceries.splice(index, 1);         //removes item referred to in index and loads array back in
        }
});

