/**Created by Jana Nash-Siegle, June 7, 2015 */

 angular.module("myApp").service("dataService", function(){


	var employeesArray = ['John Smith'];

	this.getEmployee = function(){    //adds directly to the object
		var str = localStorage.getEmployee("NameLS");    //str = string
		employeesArray = JSON.parse(str) ||  employeesArray;;  //str we just got out of local storage if nothing in local storage use default names Array
		return employeesArray;

	}

	this.addEmployee = function(pName){ 
		employeesArray.push(pName);
		var str = JSON.stringify(employeesArray);  
		localStorage.setEmployee("NameLS",str); //sets items in Local Storage saved so on reload names still exist
	}

	this.removeEmployee = function(pName){
		employeesArray.splice(employeesArray.indexOf(pName),1);
		var str = JSON.stringify(employeesArray);  
		localStorage.setEmployee("NameLS",str);   //sets items deleted from returning on reload
	}



});