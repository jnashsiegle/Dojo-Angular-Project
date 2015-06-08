/**Created by Jana Nash-Siegle, June 7, 2015 */

 angular.module("myApp").service("dataService", function(){


	var employeesArray = [
	{
		name: "Jane Doe",
		address: "1102 Baymeadow",
		city: "Houston",
		state: "TX",
		zip: "77062"
	}]

	/* Let's Get Employee array*/

	this.getEmployees = function(){    //adds directly to the object
		var str = localStorage.getItem("EmployeeLS");    //str = string
		employeesArray = JSON.parse(str) ||  employeesArray;;  //str we just got out of local storage if nothing in local storage use default names Array
		return employeesArray;
	}

	/*Add a New Employee*/

	this.addEmployee = function(pName, pStreet, pCity, pState, pZip){ /*parameters to add */
		var newEmployee = {
			name: 		pName,
			street: 	pStreet,
			city: 		pCity, 
			state: 		pState,
			zip: 		pzip
		};
		employeesArray.push(newEmployee);  //(newEmployee variable from above)
		var str = JSON.stringify(employeesArray);  
		localStorage.setItem("EmployeeLS",str); //sets items in Local Storage saved so on reload names still exist
	}

	/*Time to fire an employee or they resigned */

	this.removeEmployee = function(employees){
		employeesArray.splice(employeesArray.indexOf(employees),1); 
		var str = JSON.stringify(employeesArray);   
		localStorage.setItem("EmployeeLS",str);
		//sets items deleted from returning on reload 
	}
});