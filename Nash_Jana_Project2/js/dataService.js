/**Created by Jana Nash-Siegle, June 7, 2015 */

angular.module("myApp").service("dataService", function(){  /*initiating dataservice file within app*/

    var employeeArray = [];         /*setting var array from LocalStorage */

    this.getEmployees = function(){
        var empArray = JSON.parse(localStorage.getItem("employeesLS")) || []; /*runs through Local Storage and creates array*/
        employeeArray = empArray;
            console.log(empArray);
        return employeeArray;
    };

    this.saveEmployee = function(pName, pPosition, pEmail, pStreet, pCity, pState, pZip){
        var savedEmployees = {          /*keys for employee information*/
            name:       pName,
            position:   pPosition,
            email:      pEmail, 
            street:     pStreet,
            city:       pCity,
            state:      pState,
            zip:        pZip
        };
        employeeArray.push(savedEmployees);             /*save new employee information from form*/
        localStorage.setItem("employeesLS", JSON.stringify(employeeArray));  /*sets it in LS */
    };

    this.removeEmployeeAt = function(pIndex){   /*function to delete employee information*/
        employeeArray.splice(pIndex,1);         /*run through array, and delete indexed item*/
        localStorage.setItem("employeesLS", JSON.stringify(employeeArray)) /*set array in a string*/
    };

    this.destroyLocalStorage = function(){      /*total clear of all within LS */
        employeeArray.splice(0);                /*splicing back from nothing*/
        localStorage.clear();
    };
      
});