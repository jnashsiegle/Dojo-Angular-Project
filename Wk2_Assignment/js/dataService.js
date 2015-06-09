/**Created by Jana Nash-Siegle 6/7/2015 */

 angular.module("myApp").service("dataService", function(){


	var namesArray = ['Sean', 'Scott', 'Rebecca', 'Anna'];

	this.getNames = function(){    //adds directly to the object
		var str = localStorage.getItem("NameLS");    //str = string
		namesArray = JSON.parse(str) ||  namesArray;  //str we just got out of local storage if nothing in local storage use default names Array
		return namesArray;

	}

	this.addName = function(pName){ 
		var str;
		namesArray.push(pName);
		str = JSON.stringify(namesArray);
		localStorage.setItem("NameLS",str); //sets items in Local Storage saved so on reload names still exist
	}

	this.removeName = function(pName){
		var str;
		namesArray.splice(namesArray.indexOf(pName),1);
		str = JSON.stringify(namesArray);
		localStorage.setItem("NameLS",str);   //sets items deleted from returning on reload
	}



});