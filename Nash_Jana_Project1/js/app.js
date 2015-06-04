/**
 * Created by janasiegle on 6/1/15.
 */


var myApp = angular.module ('myApp', []);           //names the app and creates the app
    myApp.controller('MyController', function($scope){      //make the controller and name
        console.log("in the controller");           //are we in the controller?  y/n
        $scope.newItem;                                   //create new item
        console.log("about to add an item to our list");
        //List Items
        $scope.groceries = ['Bread', 'Milk', 'Eggs', 'Cottage Cheese', 'Almond Milk'];  //pre-filled array


        //Add List Item
        $scope.addItem = function() {


            if ($scope.groceries.indexOf($scope.newItem) == -1) {
                alert('you already have that item');
                return false;
            }
            else {

                $scope.groceries.push($scope.newItem);
                $scope.newItem = '';                    //clears out the field after input

            }


            //Remove List Item
            $scope.removeItem = function (item) {         //create function to remove item from list
                var index = $scope.groceries.indexOf(item);   //create index var to pinpoint where to change array
                //Code to be added here for validation
                $scope.groceries.splice(index, 1);         //removes item referred to in index and loads array back in
            }

        }



});

function empty(e)         //creates function of empty
{
    var x;              //var x to be used pulling the addGrocery id and comparing it to "" (null)
    x = document.getElementById("addGrocery").value;
    if (x === "")           //if user hits save with nothing entered in field an alert will pop up
    {
        alert("Please enter a grocery item!");      //alert to tell them to enter their grocery item.
        return false;

    }
}

