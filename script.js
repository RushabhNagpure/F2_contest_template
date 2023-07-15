/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((value) => {
      if (value.profession ===  "developer") {
        console.log(value);
      }
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(value => {
      if(value.profession === "developer"){
        console.log(value);
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    var newArray = {id: 4, name: "Susan", age: "20", profession: "Intern" };
    arr.push(newArray);
    console.log(arr);
  }
  addData();
  
  
  function removeAdmin() {
    //Write your code here, just console.log
    for (let index = 0; index < arr.length; index++) {
      if(arr[index].profession === "admin"){
        arr.splice(index , 3);
        break;
      }
    }
    var newArray = {id: 4, name: "Susan", age: "20", profession: "Intern" };
    arr.push(newArray);
    console.log(arr);
  }
  // removeAdmin();
  
  
  function concatenateArray() {
    //Write your code here, just console.log
    var new1 = {id: 5, name: "Susa", age: "21", profession: "Interne" };
    var new2 = {id: 6, name: "Sus", age: "22", profession: "Interner" };
    var new3 = {id: 7, name: "Su", age: "23", profession: "Interners" };
    var concatenate = arr.concat(new1,new2,new3);
   console.log(concatenate);
  }
  concatenateArray();
  
  