/**Created by Jana Nash-Siegle, June 16, 2015 */

angular.module("myApp").service("dataService", function(){  /*initiating dataservice file within app*/

    /*++++++++++++++++++++++CHILDREN++++++++++++++++++++++++*/

    var childArray = [
        {
            name: "Julie",
            age:  "11 years old",
            gender: "female"
        },
        {
            name: "George",
            age: "6 months",
            gender: "male"
        }
    ];            /*setting var array from LocalStorage */

    this.getChildren = function(){
        var str = localStorage.getItem("childrenLS");
        childArray = JSON.parse(str) || childArray;
        console.log(childArray);
        return childArray;
    };

    this.saveChild = function(pName, pAge, pGender){
        var savedChildren = {          /*keys for children information*/
            name:       pName,
            age:        pAge,
            gender:     pGender
        };
        childArray.push(savedChildren);             /*save new child information from form*/
        localStorage.setItem("childrenLS", JSON.stringify(childArray));  /*sets it in LS */
    };

    this.removeChildAt = function(pIndex){   /*function to delete child information*/
        childArray.splice(pIndex,1);         /*run through array, and delete indexed item*/
        localStorage.setItem("childrenLS", JSON.stringify(childArray)); /*set array in a string*/
    };

    this.destroyLocalStorage = function(){      /*total clear of all within LS */
        childArray.splice(0);                /*splicing back from nothing*/
        localStorage.clear();
    };



 /*+++++++++++++++++++++++CONTACT++++++++++++++++++++++++*/

    var contactsArray = [
        {
            name: "Brian Murray",
            phone: "(555)555-5555",
            relation: "doctor"
        }
    ];             /*setting var array from LocalStorage */

    this.getContact = function(){
        var str = localStorage.getItem("contactsLS");
        contactsArray = JSON.parse(str) || contactsArray;
        console.log(contactsArray);
        return contactsArray;
    };

    

    this.saveContact = function(pName, pPhone, pRelation){
        var savedContacts = {          /*keys for contact information*/
            name:       pName,
            phone:        pPhone,
            relation:     pRelation
        };
        contactsArray.push(savedContacts);             /*save new contact information from form*/
        localStorage.setItem("contactsLS", JSON.stringify(contactsArray));  /*sets it in LS */
    };

    this.removeContactAt = function(pIndex){   /*function to delete contact information*/
        contactsArray.splice(pIndex,1);         /*run through array, and delete indexed item*/
        localStorage.setItem("contactsLS", JSON.stringify(contactsArray)); /*set array in a string*/
    };

    this.destroyLocalStorage = function(){      /*total clear of all within LS */
        contactsArray.splice(0);                /*splicing back from nothing*/
        localStorage.clear();
    };


});

/* +++++++++++++++++++++++Instructions ++++++++++++++++++++*/

