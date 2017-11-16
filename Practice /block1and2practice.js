
//create a variable called apple and assign to it a value of 5
//then create another variable called apple2 and give to it a value of 15.
//and finally create a variable called basket and add to it the value of the two 
//other  variables combined.
//then console.log basket


var apple = 5
var apple2 = 15
var basket = apple + apple2
console.log(basket)

//easy



//create 3 variables:
//a , b and c; 
//assign 10 to a and 24 to b

//make the third variable (c) and make it be to be the result of  a and b multiplied.

// then console.log c

var a = 10
var b = 24
var c = (a * b)
console.log(c)

//easy


//Age calculator
//Want to find out how old you'll be? Calculate it!

//Store your birth year in a variable.

//Store a future year in a variable.

//Calculate your 2 possible ages for that year based on the stored values.

//For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, 
//depending on what month it is in 2026.

//Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.


var birthYear = 1991
var futureYear = 2020

var age = futureYear - birthYear
var age2 = futureYear -birthYear -1

//28 and 29 (yikes!)
//easy


//Ever wondered how much a "lifetime supply of Tea you will need?"
//let's find out!!!
//store  your current age in a variable
//store your estimated end age in a variable
//store how many teas you drink per day on average
//calculate how many you will need until the end!
//then console.log the following sentence replacing NUM with the actual number of Tea-bags you are going to need...

//'I will need at least NUM of tea-bags for this lifetime'



var current = 26
var end = 100
var teaPerDay = 1

var difference = end - current//=70
difference * 365

var total= difference + teaPerDay

//easy


//Declare the following variables with the following values:

//a => 10
//b => 22
//c => 43
//d => 54
//e => 65
//f => 34
//g => 10
//h => 10

//then compare them in pairs using the JavaScript Arithmetic Operators
//https://www.w3schools.com/jsref/jsref_operators.asp
//and make sure that the result of your comparison is the following:
//false, false, true, true


//example

//console.log(10 > 5) 
//this will return true

//compare  (a,b) (c,d), (e,f), (g,h)



//should console.log false, false, true, true


var a = 10
var b =22
var c = 43
var d =54
var e = 65
var f = 34
var g= 10
var h= 10


console.log(a>b)
console.log(c>d)
console.log(e>f)
console.log (g<=h)

//easy



//using 'strict equality' check, compare the following variables 
//and console.log true if the are NOT the same and false if they are


//num  =>  10 
//num1 => "10"

//num2 =>  33 
//num3 =>  44 

//num4 =>  21 
//num5 =>  21 

//num6 =>  0  
//num7 =>  0 


var num = 10
var num1 = "10"
var num2 = 33
var num3 = 44
var num4 = 21
var num5 = 21
var num6 = 0
var num7 = 0

console.log(num  !== num1)
console.log(num2 !== num3)
console.log(num4 !== num5)
console.log(num6 !== num7)


//easy


//tell which number is even
//assign each of the below number to a variable, 
//then using the module operator check which of them is even and which is odd, 
//and console.log true if is even and false if is odd

//3,  123 , 545 , 34 , 64 , 6634 , 876


var arr = [3,  123 , 545 , 34 , 64 , 6634 , 876]

arr.forEach(function(ele){
	if  (ele % 2 == 0)
	  console.log (true)
	else {
		console.log (false)

}
})


// I know we did not know functions before when we 
//did this but I do now so I went with a 
//forEach and made the numbers in an array. 
// here is the other version

var one = 3;
var two = 123;
var three = 545;
var four = 34;
var five = 64;
var six = 6634;
var seven = 876;
​
console.log(one % 2 === 0);
​console.log(two % 2 === 0);
​console.log(three % 2 === 0);
​console.log(four % 2 === 0);
​console.log(five % 2 === 0);
​console.log(six % 2 === 0);
​console.log(seven % 2 === 0);

//knowing that the minimum age for driving a 50cc scooter is 15 ask yourself 
//how old you are with a prompt and return true if you are old enough to drive a 
//scooter and false if you are not

var minAge= 15

var age =prompt('how old are you')

function finalResult(age){
	if (age >= minAge)
		console.log (true)
	else {
		console.log(false)
	}
}
finalResult(age)


// took some adjusting what I had but was on the right track and it was just typos/syntax issues

//using prompt :
//get the name of the user
//get the year of birth of the user
//alert his name and current age in a sentence like in the example:
//Hello Jason you are 34 years old

var name = prompt('what is your name')
var birthYear = prompt('what year were your born')
var currentYear= 2017
var age = currentYear - birthYear

console.log (`hello ${name} you are ${age} years old`)

//easy



//get the age from the user with a prompt
//then using document.write you need to output an h1 withe the 
//following message, replacing the word *'DAYS'* with the actual value

// you have lived for *'DAYS'* days already!


var age = prompt('how old are you')
var totalDays = age * 365 
document.write (`<h1>you have lived for ${totalDays} days already<h1>`)


// easy, the only thing I was caught up on was add the ` outside the <h1> tag

​​//It's hot out! Let's make a converter based on the steps here.
​​    //- Store a celsius temperature into a variable.
​​    //- Convert it to fahrenheit and output "NN°C is NN°F".
​​    //- Now store a fahrenheit temperature into a variable.
​​    //- Convert it to celsius and output "NN°F is NN°C."
​​
//°F to °C	Deduct 32, then multiply by 5, then divide by 9
//°C to °F	Multiply by 9, then divide by 5, then add 32



var celsius = 30
var fahrenheit = celsius * 9/5+32
console.log (fahrenheit)
//86

var fahrenheit = 86
var celsius = fahrenheit - 32 
celsius = celsius * 5 / 9
console.log (celsius)

// second one tripped me up having to split the -32 and * 5/9 but I know why and it did not take
//long to figure it out

//*************************BLOCK TWO BELOW*******************************************//


// take the value car from the below array and assign it to a new array called arr2 
//as its first element.
//Then console.log arr2.
var arr = ['milk','cheese','car','lime']

var arr2 =[]

arr2.push(arr[2])

console.log (arr2)


//easy




 // take all values from arr and place them in a new array called newArr 
 //but in reversed order
/*var arr = ['milk','cheese','car','lime']*/
    
//then console.log newArr
// expected output newArr = ['lime','car','cheese','milk']

var arr = ['milk','cheese','car','lime']
var newArr =[]

newArr = arr.reverse()
console.log(newArr)
// just had trouble with the third like syntax. I forgot the () after reverse



//swap the value apple from arr with the value dvd-player from arr2
//starting point
var arr  =  ['banana','apple','orange']
var arr2 =  ['tv','dvd-player','playstation']

//expected output
//arr
//["banana", "dvd-player", "orange"]

//arr2
//["tv", "apple", "playstation"]

var arr  =  ['banana','apple','orange']
var arr2 =  ['tv','dvd-player','playstation']

arr3 = []

arr3 = arr2[1]
arr2[1]= arr[1]
arr[1]=arr3
console.log(arr)
console.log (arr2)



//using splice remove the third element (bread) of the array below:
//then console.log the array

var arr = ['cheese','salame','bread','water','pizza']

arr.splice(2,1)
console.log(arr)

//easy


//using the splice method remove the first and last element of the below array.
//car and toothbrush
//then console.log the array.
var arr = ['car','soap','banana','tv','toothbrush']
//expected output arr = ['soap','banana','tv']


arr.splice(0,1)
arr.splice(3,1) // this has to be 3 because we changed the number in the array with the first splice
console.log(arr)

//easy


//using array.splice remove all elements from the below array then console.log the array
var arr =[1,2,3,4,5,6,7,8,9,0,3,4,523,44,3454]
//expected output arr =[]

arr.splice(arr.length)

//easy


//using push take all elements from arr and push them to a new variable called arr2
//then console.log arr2

var arr = ["one","two","three","four"]
//expected output arr2 = ["one","two","three","four"]
var arr2 = []

arr2.push(arr) 

console.log(arr2)
//easy



//using array.push take the third and fifth elements of arr and push them to a 
//new variable called arr2

// Psych and Gotham

//then console.log arr2


var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']

//expected output arr2 = ["Psych", "Gotham"]


var arr2 = []

arr2.push(arr[2])
arr2.push(arr[4])

console.log(arr2)

//easy


//using array.concat create a new array called arr2 which takes all properties from arr
// then remove the last one using splice.
//last thing console.log arr2
var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']

//expected output arr2 = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter']



var arr2 = arr.concat()
arr2.splice(7,1)

console.log(arr2)

//easy



//using concat take apple and orange properties of arr1 and assign them 
//to a new array called arr2.
// then console.log both arr and arr2

var arr = ['banana','kiwi','orange','apple','banana']
var arr2 = []
//expected output arr2 = ["orange","apple"]

var arr2 = arr2.concat(arr[2],arr[3])
console.log(arr2)

// why did I have to make an arr2 variable that was empty before adding the third line? 
//overall easy but I do not see why I had to add that. Why cant it just be var arr2 = arr2.concat(arr[2],arr[3])



    //using indexof find the index of the car and the index of the watch and console.log them
    var arr = ['glass','car','watch','sofa','macbook']
    
    //expected output  : 
    //1
    //2

console.log('car',arr.indexOf('car'))
console.log('watch',arr.indexOf('watch'))

//easy just had some syntax things I needed to work on (example: adding '' around words)


    //using indexof check if the following colors are in the array and 
    //if they are you should console.log true, and if they are not you should console.log false.
    
    //green, red, pink,
    
    var arr = ['green','red','black','blue','brown','yellow','purple']
    //expected output
    
    //true
    //true
    //false



var arr = ['green','red','black','blue','brown','yellow','purple']
console.log(arr.indexOf('green') != -1)
console.log(arr.indexOf('red') != -1)
console.log(arr.indexOf('pink') != -1)



//had to figure out why to use -1 but now I know it means it has no index



// Using the string methods split and join remove the "," from the below string
var str = 'I,Really,Like,Pizza'
//then console.log the modified string which should ideally look like:
//expected output : I Really Like Pizza"


var str = 'I,Really,Like,Pizza'

var newString = str.split(',')

var join = newString.join(' ')

console.log(join);

//took awhile but got it. This was hard for me. I think I need to practice split/join


//Still using split and join remove the unwanted characters 
//from our word so that it will be just banana, then console.log word
var word = 'ba_*!*_na_*!*_na'
var word2 = word.split('_*!*_')
var word3 = word2.join('')

// not bad after doing the last one but I need practice


//check the following and console.log true if they are arrays and false if 
//they are not, you will need to research a bit as this hasn't been covered.
    var one   = {name:'antonello'}
    var two   = ['name', 'antonello']
    var three = [[],[],{},"antonello",3,function(){}]

console.log (Array.isArray(one))
console.log(Array.isArray(two))
console.log (Array.isArray(three))


//The Array.isArray() function determines whether the passed value is an Array.
//true if the object is an Array; otherwise, false.
    
/*//expected output 
false
true
true
*/

// had to look up since I did not recall Array.isArray.

