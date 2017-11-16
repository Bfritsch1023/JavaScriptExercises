
//=======================EXERCISE0======================================//
//Take the following variables and make sure they are NOT:
//undefined
//an empty string
//false
//null

// RUN your check with the following

//var a = ''
//please provide us a valid variable
//var b;
//please provide us a valid variable
//var c = null;
//please provide us a valid variable
//var d = false
//please provide us a valid variable
//var e = 'false';
//thanks!
//var f = "hello"
//thanks!
//var f = "true"
//thanks!

//you can only use one if statement per variable and only one condition!!!



//if they are undefined you should console.log a message as follows:
//please provide us with valid data.
//if the variable is none of the above it should console.log('valid data provided')

var a = ''
var b; 
var c = null
var d = false
var e = 'false'
var f = "hello"
var g ="true"

var check = function(str){
    if( str ) {
    console.log('valid data provided')
}else{
    console.log ('thanks')
}
}

// run the following individually 
check(a)
//please provide us with valid data
check(b)
//please provide us with valid data
check(c)
//please provide us with valid data
check(d)
//please provide us with valid data
check(e)
//valid data provided
check(f)
//valid data provided
check(g)
//valid data provided


    //using if statements check if you are older than John who is 43
    // to define your age create a variable "myAge"
    
    //if you are the oldest it should console.log:
    
    //`I am the oldest! I am "myAge" and John is "JohnAge" years old
    
    // in case John is the oldest it should console.log the following message:
    
    //actually John is older than I! because I am "myAge" and John is "JohnAge" years old`
    
    //in both cases you should replace "myAge" and "JohnAge" with the actual ages

var myAge= 26
var johnAge=43
	if (myAge >= johnAge){
		console.log (`I am the oldest! I am ${myAge} and john is ${johnAge} years old`)
	}else{
		console.log(`Actually john is older than I! I am ${myAge} and john is ${johnAge} years old`)
	}

// easy


//write a forEach loop that loops through the array below and if the number is
// even it console.log 'it is even' if the number is odd it console.log it is odd,
//in case the array element is not a number it should console.log 'invalid data provided'
//array 
var arr = [1,5,9,33,65,122,66,['banana']]

//expected output

//it is odd
//it is odd
//it is odd
//it is odd
//it is odd
//it is even
//it is even
//invalid data provided


var arr = [1,5,9,33,65,122,66,['banana']]

arr.forEach(function(item){

	if(typeof item !== 'number'){
		console.log('invalid data provided')
	}else if (item %2 == 0){
	    console.log('it is even', item)
	}else {
	    console.log('it is odd', item)
	}

});


// took awhile but I got it. Just need to keep practicing


    //write a forEach loop that loops through the given array and check if the 
    //typeof the element is a string and if it is it pushes it to the provided empty array.
    //once done you should console.log the following message replacing the variables
    //(what's in capital letters) with actual data.
    //
    //there are NUMBER of strings in this new array :ARR2
    var arr2= [] 
    var arr = 
    [
            'banana',
            ['banana'],
            {banana:'banana'},
            false,
            true,
            'cheese',
            12,
            -32,
            'salame'
    ]
arr.forEach(function(i){
	if (typeof i == 'string')
		arr2.push(i)
})

console.log (`there are ${arr2.length} of strings in this new array`)
// got this one just some typing errors but got it right



// Create a loop that goes through a string and checks how many occurrencies of 
//commas and question marks there are in it.
//then console.log in a sentence like the one below replacing the variables with actual data

//there is COMMAS comma and QUESTION-MARKS question marks in this sentence

var str = 'hello, how are you today? I am not bad and you?'
//expected output
//there is 1 comma and 2 question marks in this sentence


var str = 'hello, how are you today? I am not bad and you?'
var comma =0
var questionMark=0
for(i = 0; i < str.length; i++ ){
    if (str[i] === ','){
        comma++
    }else if (str[i] === '?'){
        questionMark++
    }
    
}


console.log (`there is ${comma} commas and ${questionMark} question marks in this sentence`)

//come back and keep redoing this one. I was on the right track once I got going
// but had trouble on where to go in the if statements. I started the loop but after i++
// I was cuaght up on the syntax and how to write what I wanted. 





//Count the capitals in the word and console.log them, as well as their count


//expected output
// A
// S 
// L 
// G 
// there are 4 capitals in this word


 var str = 'Antonello Sanna Likes videoGames'
    var str2 = []

    str=str.split('')

    str.forEach(function(element){
        if(typeof element == 'string'){
            if(element == element.toUpperCase() && element !== ' '){  
                str2.push(element)         
            }
        }});

    console.log(`${str2} There are ${str2.length} capitals in this word`)


//redo over and over until I get it right. 



///with a foreEach loop that goes through the given array, and if the element can be 
//converted to a number then console.log the element converted to a number.
//in case  the element cannot be converted then it should console.log the following message 
//replacing ELE with the actual element

//ELE,` cannot be converted to a number`




 var arr = ['banana','34','68', [12], {number:14},'one','two','14', 54]


   
        arr.forEach(function(ele){
              if( Number(ele)){
                console.log(Number(ele))
              } else{
                console.log(`${ele} cannot be converted to a number`)
              }
          })

// this one had me caught up because the word "converted"... Keep redoing it


// find the minors and remove them from the club entry list...

// You have a list of ages of people who want to join the opening of your new club, 
//check if they are at least 21 and not older than 65.
//create an array of approved ages  where you place all ages that meets our criteria.
//then console.log the message shown in the expected output.
//You can use a loop of your choice for this one!
var approved = []
var ages = [12,33,12,43,99,11,5,21,43]

//expected output 
//there are 4 people in the list and the ages are 33,43,21,43


ages.forEach(function(ele){
if (ele >= 21 && ele <= 65)
    approved.push(ele)
})

console.log (`There are ${approved.length} in the list and the ages are ${approved}`)

// got this right away; these seem to make the most sense to me when doing conditions



//Create an empty array (arr) and then create a loop that loops through 
//another array (numbers), it takes all odd numbers smaller than 30 and pushes
// them in our arr, once done, console.log the message as per expected output.

//var numbers = [12,33,12,43,99,11,5,21,43]

//expected output
//There are 3 odd numbers under 30 in our array  (3) [11, 5, 21]


var numbers = [12,33,12,43,99,11,5,21,43]
var arr2 =[]

numbers.forEach(function(ele){
    if(ele <= 30 && ele % 2 !== 0)
        arr2.push(ele)

})


console.log (`There are ${arr2.length} odd numbers under 30 in our array ${numbers}`)

// was stuck because sign was backwards- george gave me a hint and viola! 



///write a foreach Loop that goes through the array, and checks the length 
//of each string in the array and console.log it, please bare in mind that 
//the array contains also non string element, you should count how many 
//non-string elements there are.
//After the loop console.log the message as per expected output.

//var arr = ['mario','john',34,true,'banana']
//there are NUM non string elements in our array and these are ELEMENTS
var arr = ['mario','john',34,true,'banana']

//expected output
//the lengths of the strings are 5,4,6, there are 2 non string elements in our 
//array and these are (2) [34, true]

var arr   = ['mario','john',34,true,'banana']
var arr2  = []
var arr3  = []

arr.forEach(function(ele){
    if(typeof ele == 'string'){
      arr2.push(ele.length)
    } else { 
      arr3.push(ele)
    }
});
console.log(`the length of the string are ${arr2}, there are ${arr3.length} non string elements in our array and these are ${arr3}`)
// got it wrong at first. Keep practicing.


// create an empty array called bool
//create a variable called maxCapacity
//and assign to it a value of 5
// loop through the provided array and every time you find a boolean push it 
//to our bool array until you reach the maxCapacity.
//then console.log a message as per expected output

// we filled up our max capacity of 5 with the following booleans true,false,true,false
var arr  = ['mike','john',true, false,12,true,false, false,true,false,true,false]

var bool = []

var maxCapacity= 5


arr.forEach(function(ele){
    if (typeof ele == 'boolean' && bool.length < maxCapacity) {
        bool.push(ele)
    }
})

console.log(`We filled up our max capacity of ${maxCapacity} with the following booleans ${bool}`)

//write a forEach loop that goes through the array and looks for duplicates.
//you need one array with the unique numbers 
//(also these who were double before removing the duplicates)

//one array only with the removed duplicated

//the original array should be left untouched..

//var arr = 
        //[
                //'mike','jason','peter','robert','mike','jason','jenny','jane'
        //]

//expected output

//there are 6 elements in the array of values and these are
// mike,jason,peter,robert,jenny,jane and there are 2 elements in the array 
//of duplicates and these are mike,jason 

    var arr = ['mike', 'jason', 'peter', 'robert', 'mike', 'jason', 'jenny', 'jane']
    var unique = []
    var removed = []


    arr.forEach(function(el) {
      if (unique.indexOf(el) == -1) { 
        unique.push(el)
      } else {
        removed.push(el)
      }
    })

    console.log(`there are ${unique.length} elements in the array of values and these are ${unique} and there
      are ${removed.length} elements in the array of duplicates and these are ${removed}`)
//redo and practice


/*extend the previous exercise by making sure to return only the unique 
elements of the array only this time
all items of the returned array must be numbers 
bigger than 10. (no conversion to numbers)
*/
/*Example
var arr = [ 
            10, 44, 55 ,66 , 77 , 55 , 44 ,
            3 , 3 , 3 , 4 , 5 , 6 , 54 , 
            "antonello", "33", "£", "66"*/
]
//expected output :
//[10, 44, 55, 66, 77, 54, 33]

var arr = [ 
            10, 44, 55 ,66 , 77 , 55 , 44 ,
            3 , 3 , 3 , 4 , 5 , 6 , 54 , 
            "antonello", "33", "£", "66"
]
var unique = []
var other=[]
    arr.forEach(function(ele) {
// console.log("typeof ele is a number?",typeof ele == Number)
      if (typeof ele == 'number' && ele >= 10) {

        unique.push(ele)
      } else {
        other.push(ele)
      }
    });



//take this wonderful string below and get rid of all numbers elements so that
// it can finally display a meaningful sentence!



var str = 'I1L2o34895748957v4e53489573456B7an34534543758349758a9n5434598579357376a958783495743987585'
var num = str.split('') // here they will push and be split
var letters = [] //empty array where letters will go (they will be split)
var arr = [] // final sentence I love banana will be here
num.forEach(function(ele){ //create forEach with one argument
    if (!Number(ele)) {  // if ele is not a number push to letters ( so it will be letters)
        letters.push(ele) 
    }
})
for (var a in letters) { // crete for loop to run though the letters array
    if (letters[a].toUpperCase() == letters[a]){ //convert the first letters to capital (a represents 0 index)
        arr.push(' ' + letters[a])//this adds space in sentence
    }else {
        arr.push(letters[a]) //push to final array
    }
}
console.log(arr.join(''))

//I Love Banana


