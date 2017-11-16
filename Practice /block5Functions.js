
//write a function that takes two arguments, greeting and name.
//inside the function also declare a variable called sentence and give it a value of 
//'how are you today?'
//it should then console.log them in sequence.
//see expected output...

//expected output//

//greeting name sentence
//example
//Hello Mike how are you today?


var greeting = function (name) {
    console.log(" Hello, " + name + " how are you today? ");
};

greeting('Brie')



EXERCISE 2
//Write a function called divide that takes two 
//arguments, and divide the second with the first 
//and console.log the result.


//example 10 / 2 = 5
//divide(10,2)
//5


var divide = function(a,b){
	return(a/b);
}
divide (10,2);



// Exercise 3
//write a function called calc that takes 3 arguments the first 2 are numbers and the 
//third is an aritmetic operator, so is either + , -, *, /
// and it executes the appropriate operation according to the provided 
//aritmetic operator.


// make sure you test your function with all 4 aritmetic operations

    function calc (a,b,c){
        if(c == "+") {
            return a + b
        } else if(c == "-") {
            return a - b
        } else if (c == "*"){
            return a * b
        } else if (c == "/") 
             return a / b
    };


calc (5,"+")
calc (7,"-")
calc(11,"/")
calc (15,"*")




//exercise 4
//extend our awesome calc function by adding some conditions...
//in case the third arguments is  / or * and the second argument
// is not provided it should default to one.
//in case the third arguments is +  or  - and the second 
//argument is not provided it should default to zero.

//example
//calc(10,"/")  //10
//calc (30,"*") //30
//calc (2,"+")  //2
//calc (3,"-")  //3

function calc(a,b,c){
	if (c == '+') {
		console.log(a + b)

	}else if ( c == '-') {
		console.log(a - b)
	}else if (c == '*') {
		console.log(a * b)
	}else if (c == '/') {
		console.log(a / b)
	}
}
calc(10,2,'+')
calc(10,2,'-')
calc(10,2,'*')
calc(10,2,'/')




//Exercise 5


var arr  = ['12','true','false','hello',12,true,undefined,false] 
var arr2 = ["banana",'true',['ciao'],12,'gennaro olivieri',true]
var arr3 = [12,13,54,true,'false']

//write a function that loops through the above arrays 
//and check the typeof of each element, and counts how many 
//occurrencies of booleans and strings there are, then it console.log
// their number in a sentence like in the below example.
//if the typeof the element is not a string nor a boolean it will
// be considered unknown.

//EXAMPLES
checkTypeOf(arr)
//there are 2 booleans and 4 strings in the array and 2 unknown elements
checkTypeOf(arr2)
//there are 1 booleans and 3 strings in the array and 1 unknown element
checkTypeOf(arr3)
//there are 1 booleans and 1 string in the array and 3 unknown elements

var boolean= []
var string =[]
var unknown=[]

forEachfunction(ele){
	if (typeof ele === boolean)
		boolean.push(ele) 
	}if (typeof ele === string)
		string.push(ele)
	} else {
		unknown.push(ele)
	}
}
  console.log(`there are ${boolean.length} booleans and ${string.length} 
  	strings in the array and ${unknown.length} unknown elements`)

}
checkTypeof(arr)
checkTypeof(arr2)
checkTypeOf(arr3)


//exercise 6



//Write a function that takes 2 arguments
// the first will be an array of strings
// the second  a minumun length value
//check if the length of each element in the array is at least as long as the 
//value of the second argument passed.(minumun length value)
//in the end console.log how many elements have a length equal or longer than the minumun 
//length value and are therefore approved and how many are not.

var arr  = ['banana','salame','cheese','coke'] 
var arr1 = ['george','pane','mortadella','spaghetti','pesto']
var arr2 = ['bread','butter','peanuts','nutella']

// then call your function as below and you should get the expected output
checkLength(arr, 5)
//expected output
//there are 3 approved items and 1 rejected items in the provided array
checkLength(arr1,7)
//expected output
//there are 2 approved items and 3 rejected items in the provided array
checkLength(arr2,3)
//expected output
//there are 4 approved items and 0 rejected items in the provided array


funtion checkLength (array, length){
		var equal= 0
		var notEqual=0

arr.forEachfunction(ele){
	if (ele.length >= length){
		equal++
	}else {
		notEqual++
	}
};

console.log (`there are ${equal} approved items and ${notEqual} rejected items in the provided
	array`);
}

//exercise 7



//write a function that tells you how old you are based on the date of birth passed.
//this function will take 3 arguments day, month and year
// you can use the day of today by simply writing it yourself, or if you feel brave enough you 
//may want to use the Date object although we haven't covered that, so this would require some 
//self research from your end.

//========================EXAMPLES========================
//tellAge(2,8,1982)
//you are 34 years old

//tellAge(2,7,1982)
//you are 35 years old

//tellAge(28,7,1982)
//you are 34 years old



 var age;
 var date = new Date();
 var currentMonth = date.getMonth()+1;
 var currentYear = date.getFullYear();
		function tellAge(day,month,year){
        if (month < currentMonth){
		age = currentYear - year; 
		} else {
            age = currentYear - year -1; 
        }
    };

    tellAge(23,10,1991)

    console.log(`you are ${age} years old`)
    //output you are 26 years old

//exercise 8



// write a function called checkAge
// knowing that"
// the age to drive is 16
// the age for drinking is 21

// check the age and output one of the following messages according with 
//the age of the person. please replace the numbers with data from your variables.
//EXAMPLES

//checkAge(2,9,1995)
//You are 21 years old therefore old enough to drink and drive

//checkAge(2,9,1999)
//You are 17 years old therefore old enough to drive but not to drink

//checkAge(2,9,2005)
//sorry you are too young to drink or drive!

function checkAge(day,month,year) {
    var age = tellAge(day,month,year)
    if (age >= 21){
            console.log(`You are ${age} years old therefore old enough to drink and drive`)

        }else if (age < 21 && age >= 16) {
            console.log(`You are ${age} years old therefore old enough to drive but not drink`)
        }else {
            console.log('sorry you are too young to drink or drive!')
        }
}
checkAge(2,9,1995)
checkAge(2,9,1999)
checkAge(2,9,2005)











//exercise 9 



//Write a function called  checkAge that checks how many days there 
//are between now and the next birthday.
//if the date of birth is today it should alert 
        // happy birhtday! 
//if the date of birth is passed it should console.log
        // Sorry your birthday is passed for this year
//otherwise it should console.log how many months and days there are between now 
//and the next birthday.
//in case there is less than 1 month between now and the next birthday it should 
//ignore the month.
//Examples:
//Please bare in mind that these examples are not up to date (literally) 
//so compare the output with the current date...

//checkAge(2,8,1982)
//your birthday will be in 6 days

//checkAge(2,9,1982)
//your birthday will be in 1 months and 6 days

//checkAge(25,2,1982)
//your birthday is passed for this year

function checkAge(m,d,y){
var currentYear = 2017
var currentDay= 14
var currentMonth= 11
var currentAge = currentYear - y
	if (currentMonth < y){
		currentAge --
	if(m == currentMonth && currentDay < d) {
		currentAge--
	}
	return currentAge
 }

checkAge(10,23,1991)

//NEED TO REDO



//Exercise 10 
//write a function called dollarsConverter which takes 2 arguments
//The amount of cash to be converted
// the currency we want to conver it to.
// let's assume that the conversion for euro and pounds are as follow:
//euro 1.2
//pounds 1.5

//please console.log the converted amount in a sentence as shown in the example below.

// in the case the currency provided is not in the list it should display the following message:

//wrong currency provided!

//if no currency is provided at all it should display the following message:

//currency needed for conversion!

//You should use the built-in method Math.round to round up your result.
//examples

//dollarsConverter(100,'pounds')
//You will receive 67 pounds in exchange for your 100 dollars

//dollarsConverter(100,'euro')
//You will receive 83 euro in exchange for your 100 dollars

//dollarsConverter(100,' Japanese Yen')
//wrong currency provided!


var euroExRate = 1.2
var poundExRate = 1.5
var euro =0
var pound=0

function dollarsConverter(total, currency) {
  if (!currency) {
    return `currency needed for conversion!`;
  }
  if (currency != 'euro' && currency != 'pounds') {
    return `wrong currency provided!`;
  }
  if (total && currency) {
 
    if (currency == 'euro') {
      var euroAmt = Math.round(total / euroExRate);
      return `You will receive ${euroAmt} euro in exchange for your ${total} dollars`;
    } else if (currency == 'pounds') {
      var poundAmt = Math.round(total / poundExRate);
      return `You will receive ${poundAmt} pounds in exchange for your ${total} dollars`;
    }
  }
}

dollarsConverter(99, 'euro');
dollarsConverter(99, 'pounds');
dollarsConverter(100, 'Yen');
dollarsConverter(99,);

//Exercise 11



/*Write a function called runOnRange that runs a function 
through a range of numbers and console.log the result of the passed function
The function takes 2 arguments: the first is a function that can take 
one argument (that must be a number) and a second argument which is an 
object with 3 properties: start, end and an optional step.
If step is missing the step will be set to 1.
Example*/

var addOne = function(num) {return num + 1}
runOnRange(addOne, {start: 10, end: 17, step: 3})
// => 11 
// => 14 
// => 17 

runOnRange(addOne, {start: -6, end: -4})
// => -5 
// => -4 


runOnRange(addOne, {start: 12, end: 12})
// nothing should be console.logged in this case! 

runOnRange(addOne, {start: 23, end: 26, step: -1})
// nothing should be console.logged in this case! 

runOnRange(addOne, {start: 23, end: 26, step: 0})
// nothing should be console.logged in this case! 


//exercise 12



/*Write a function called stringChop that chops a string into chunks of a given length. The function takes 2 arguments, the first one being the string to chop, and the second one a number that will be the size of you chunks.
Example
stringChop('w3resource'); //#=> ["w3resource"]
stringChop('w3resource',2); //#=> ["w3", "re", "so", "ur", "ce"] 
stringChop('w3resource',3); //#=> ["w3r", "eso", "urc", "e"]*/


function stringChop(str, chunks) {
  var result = [];
  for (var i = 0; i < str.length; i += chunks) {
    result.push(str.substr(i, chunks));
    console.log('here', str);
  }
  return result;
}

stringChop('w3resource');
stringChop('w3resource', 2);
stringChop('w3resource', 3);

//practice 11/12
