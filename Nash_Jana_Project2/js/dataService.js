/**Created by Jana Nash-Siegle, June 7, 2015 */

angular.module("myApp").service("dataService", function(){

    var employeeArray = [];

    this.getEmployees = function(){
        var empArray = JSON.parse(localStorage.getItem("employeesLS")) || [];
        employeeArray = empArray;
            console.log(empArray);
        return employeeArray;
    };

    this.saveEmployee = function(pName, pPosition, pStreet, pCity, pState, pZip){
        var savedEmployees = {
            name:       pName,
            position:   pPosition,
            street:     pStreet,
            city:       pCity,
            state:      pState,
            zip:        pZip
        };
        employeeArray.push(savedEmployees);
        localStorage.setItem("employeesLS", JSON.stringify(employeeArray));
    };

    this.removeEmployeeAt = function(pIndex){
        employeeArray.splice(pIndex,1);
        localStorage.setItem("employeesLS", JSON.stringify(employeeArray))
    };

    this.destroyLocalStorage = function(){
        employeeArray.splice(0);
        localStorage.clear();
    };

});