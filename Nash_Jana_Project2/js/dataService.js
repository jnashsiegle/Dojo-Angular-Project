/**Created by Jana Nash-Siegle, June 7, 2015 */

angular.module("myApp").service("dataService", function(){
    var employeesArray;
    console.log("We are in the dataService");

    employeesArray = [{
        name: "Jane Doe",
        street: "1102 Baymeadow",
        city: "Houston",
        state: "TX",
        zip: "77062"
    }];
    console.log(employeesArray); //test
    /* Let's Get Employee array*/

    this.getEmployees = function () { //adds directly to the object
        var str = localStorage.getItem("EmployeeLS"); //str = string
        employeesArray = JSON.parse(str) || employeesArray; //str we just got out of local storage if nothing in local storage use default employees Array
        return employeesArray;
    };

    /*Add a New Employee*/

    this.addEmployee = function (name, street, city, state, zip) { /*parameters to add */
        var str;
        var newEmployee = {
            name: newName,
            street: empStreet,
            city: empCity,
            state: empState,
            zip: empZip
        };

        employeesArray.push(newEmployee); //(newEmployee variable from above)
        str = JSON.stringify(employeesArray);
        localStorage.setItem("EmployeeLS", str); //sets items in Local Storage saved so on reload names still exist
        };


    /*Time to fire an employee or they resigned */

    this.removeEmployee = function (name, street, city, state, zip) {    /*params to delete */
        var str;
        employeesArray.splice(employeesArray.indexOf(item), 1);
        str = JSON.stringify(employeesArray);
        localStorage.setItem("EmployeeLS", str);
        //sets items deleted from returning on reload
    };
});