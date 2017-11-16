//Exercise 1:

//FIX THE ABOVE CODE SO THAT IT DOESN'T THROW AN ERROR!

var obj = {
		name: "antonello",
		lastname:"sanna",
}		
console.log(obj)


//define an empty object called obj
//take the values from the below array and assign them as 2 separate propreties to the object
//these two propreties should be "name" and "lastname"
//do that using square brackets notation
//then console.log the object propreties using . notation

//array 
var names = ['jason', 'bourne']

//expected output
// jason bourne

//Exercise 2:

var obj  = {
}
obj.name = names[0]
obj.lastname= names[1]




console.log (obj.name, obj.lastname)
console.log(obj['name'], obj['lastname'])


//Exercise 3:


//Write a function called modifyObject that takes 3 arguments. 
// the first argument is the object to which you are adding new data
// the second argument is a key to be added
// the third argument is the value to be associated with the key

//Example

var obj = {a: 1, b: 2}//original object
modifyObject(obj, 'c', 3)  

//expected output 
//{a: 1, b: 2, c: 3}  

var obj = {a: 1, b: 2}
function modifyObject (obj, k, v) { 
	obj[k] = v 
};

modifyObject (obj,'c',3) //callback

console.log('this is the new obj', obj)

//



//Exercise 4:


//Write a function called addToList that takes one argument, an array of movie titles.
//then create a new empty array called movieList.
//loop through the array of movie titles and push them inside the movieList array as objects.
//this object will have two key value pair:
//id which has to be an unique number of your choice (ideally the index)
//then title which will be the title of the movie.
//in the end console.log the movieList array.

var movies = ['matrix','the dark knight','a beautiful mind','american pie']

//EXAMPLE
//addToList(movies)
//{title: "matrix", id: 0}
//{title: "the dark knight", id: 1}
//{title: "a beautiful mind", id: 2}
//{title: "american pie", id: 3}

var movies = ['matrix','the dark knight','a beautiful mind','american pie']
	movielist =[]

movies.forEach(function(ele, i){
	var obj= {}
	obj.title = ele
	obj.id 	  =  i
	movielist.push(obj)

})
console.log (movielist)

//easy

//Exercise 5:

//write a for in loop that goes through the below object
//and prints out its elements next to a string that describes what the element is.
//see example:

var person = {
        name:'Antonello',
        surname:'Sanna',
        age:34,
        gender:'male'
        
}
//EXAMPLE:
//key name value Antonello
//key surname value Sanna
//key age value 34
//key gender value male


var person = {
        name:'Antonello',
        surname:'Sanna',
        age:34,
        gender:'male'
        
}
for(var key in person) {
	console.log(`key ${key} value ${person[key]}`)
}

//easy

Exercise 6:
// Write a function called swap that takes one argument, 
//an object, and returns another object where the key/value pairs 
//have been swapped. The original object should not be modified.
function swap(obj){
var obj = {a: 1, b: 2}
var newObj ={}
for (var orange in obj){
	
	 newObj[obj[orange]] = orange

}



Exerise 7:
//// Write a function called last that takes one argument,
// an object, and returns an object containing only the last 
//key/value pair and does not modify the original object.

var obj = {a: 1, b: 2}

function swap(obj){
var newObj ={}
for (var orange in obj){
  
   newObj[obj[orange]] = orange

}
return newObj
}
swap(obj)



Exercise 8:
// Write a function called sumAll that takes one argument,
//an object, and sums all it's values. If no object is provided 
//or if the object is empty sumAll should return 0.

var obj = {a: 1, b: 2, c: 2};
var sum = 0;

function sumAll(obj) {
  if (!(obj) || null) {
    return 0;
  };
  for (var key in obj) {
    sum += obj[key];
  }
  return sum;
}


Exercise 9:

// Create a function called model. The model function allows you to control 
//how you interact with a collection of objects that we call collection that are 
//stored in the DB. Model imposes conditions on the properties of the collection, 
//for example which keys are allowed.
// In this exercise create a model function. This model uses the definitions of a 
//predefined object called schema (you don't need to define it) to assert the keys that each object in a collection that are allowed. The model function can take 2 arguments: the first is the type of the operation we want to execute on the db and the second is the data we need to execute it. For now we only define an operation called 'add'.

//if the argument add is not present then nothing should be added.
//do with george

schema = ["id", "name", "age"]
DB = [];

var newObj = {};

function model(add, obj) {

  for (var key in obj) {
    schema.forEach(function(el){
      if (
}

console.log()

Exercise 10:


/*
// Continuing the previous exercise, add the posibility to 
force the type of the value that can be set on a given property. 
In this case schema is an object and no longer an array. 
The allowed values are only "string", "number" and "boolean". 
If the value of a given property does not have the appropriate type,
 then the property will not be added to the new object in the db.
// Example

schema = {id: "number",
 name: "string",
  age: "number",
  married: "boolean"}
DB = []

model("add", {id: 1, name: "Joe", age: "32", address: "Muntaner 262, Barcelona", married: "to Mary"})
DB // [{id: 1, name: "Joe"}] => married and age not added because of the wrong type (why?)
*/


var schema = {
  id: "number", 
  name: "string", 
  age: "number", 
  married: "boolean"}

var DB = []

function model(add, obj) {
  var add = function(i){
    DB.push(i)
  }
  for (var key in obj){
    var obj2 = {}
    if (Object.keys(schema).includes(key) && typeof obj[key] === schema[key]) {
      obj2[key] = obj[key]
    }
  }
  add(obj2)
  return DB
}

model("add", {
  id: 1, 
  name: "Joe", 
  age: "32", 
  address: "Muntaner 262, Barcelona", 
  married: "to Mary"})

Exercise 11:

//need to do still



Exercise 12:


// Write 4 functions called bankAccount, withdraw, deposit and balance. They keep track of the amount added and removed from a bank account when called bankAccount function.
//The bankAccount and balance functions takes no argument and withdraw and deposit
// only take one argument.
// Example

/*bankAccount()

withdraw(2)

withdraw(5)

deposit(4)

deposit(1)

balance() // -2*/

var currentBal = 0
function bankAccount(){
    
  withdraw = function(amount){
    currentBal -= amount
  },
  deposit = function(amount){
    currentBal += amount
  },
    balance = function(){
      console.log(currentBal)
    }

}

Exercise 13:

//exercise 13


// Write a function called Slice Which extrapolates properties from an object and uses them for a newly created object. this function can take 3 arguments: the first is an object, the second and third are numbers.
// The second argument indicates the position of the key/value pair we want to start taking properties from (slicing) and the third one indicates the end of the slicing. So for instance slice(0,2) refers to the positions 0 and 1 of the object having the following object: var obj = {a: 1, b: 2, c: 2} and calling the function slice with the arguments obj, 0, 2 should return {a: 1, b: 2}

// Example:

// slice(obj, 0,2) returns : {a: 1, b: 2}
// We assume that, as it is common in computer science, the first element of an object is 0 and not 1.

// If the third argument is not passed it should default to 1.

// Example

/*var obj = {a: 1, b: 2, c: 2}

var newObje = slice(obj, 0, 2)
// newObje => {a: 1, b: 2} 

var newObje = slice(obj, 2, 2)
// newObje => {} 

var newObje = slice(obj, 5, 2)
// newObje => {} 

var newObje = slice(obj, 0)
// newObje => {a: 1} 


var newObje = slice(obj, 0, 0)
// newObje => {}*/

var obj = {a: 1, b: 2, c: 2}

// In this exercise, a is the starting point, b is not the ending point, 
//but the amount of the properties you want to take from the original object.
function slice(obj, a, b) { 
  var arr = []
  var arr2 = []
  var obj2 = {}
  for(var key in obj) {
    arr.push({[key]:obj[key]})
  }
  if(b == undefined ){
    arr2.push(arr[a])
  }else{
    for(var i = 0; i < b; i++){
      arr2.push(arr[a+i])
    }
  }
  for (var item of arr2 ) {
    for (var key in item) {
      obj2[key] = item[key]
    }
  }
  return obj2
}

slice(obj,0,2)
slice(obj,2,2)
slice(obj,5,2)
slice(obj,0)
slice(obj,0,0)

Exercise 14:

/*
Write a function called sort that sorts the values of an object, which should all be numbers, from the smallest to the biggest. The function will return a new object of which the keys are the indexes going from 0 to n; where n is the number of properties of the object minus 1.
Example
obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4}
sort(obj) // {0: 1, 1: 1, 2: 3, 3: 4, 4: 4, 5: 20}*/

function sort(obj){
  var arr = []
  var newObj = {}
  for (var key in obj) {
        arr.push(obj[key])
        arr = arr.sort((a, b)=> a-b)
        arr.forEach(function(num,i){
          newObj[i] = num 
        })
  }
   return newObj
}
var obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4}
sort(obj)

//exercise15Objects


/*
Extend the functionality of the previous function Sort to include the possibility of having different types of sorting according to the arguments we pass. we need to be able to decide if sorting by keys or by value and if in ascending or descending order. please also note that the keys are letters and the values are numbers so should the sorting be by key it needs to sort alphabetically.
Example
var obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4}
sort(obj,'keys','ascending')
//Object {0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f"}
sort(obj,'keys','descending')
//Object {0: "f", 1: "e", 2: "d", 3: "c", 4: "b", 5: "a"}
sort(obj,'values','ascending')
//Object {0: 1, 1: 1, 2: 3, 3: 4, 4: 4, 5: 20}
sort(obj,'values','descending')
//Object {0: 20, 1: 4, 2: 4, 3: 3, 4: 1, 5: 1}
Note: should the second or the third argument be missing the function should console.log the folllowing message:"missing argument here!".
*/


//need to do 15

