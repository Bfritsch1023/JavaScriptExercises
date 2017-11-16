
//create a for loop that prints out the numbers from 1 to 100

//expected output 1...100


for(var i= 0; i <= 100;i++){
	console.log(i);
}


// Got it right the first try without looking at notes. 



//create a for loop that prints out the numbers from 100 to 0
//expected output 100...0

for(var i = 100; i > -1; i--){
		console.log(i);
}

// Got it right the first try without looking at notes. 


//create a  while loop  that checks the numbers from 0 to 100 and 
//for each iteration if the number is not divisible by 2, should 
//print false, and if it is it should print true

//expected output 
//true
//false
//true
//false ... and so on to 100

var i = -1

while(i <=99){
	i++;
	console.log(i % 2 == 0)
}



// when I first did that I forgot the  ==0. This gave me what it was divisible
//by which made sense. However, I was stuck on how to make it true or false.
//I finally got the ==0 but it confused me for a minute. I kept wanting to
//add an if statement to have it give true or false.



//create a forEach loop that goes through an array like this one in the 
//example and prints out the index and the array element in the same 
//console.log.
//next to each element and index add a semantic string, like for example 
//'element' for the element and 'idex' for the index

var arr = ['banana','pinapple','orange']

//expected output //
//element banana
//index 0
//element pinapple
//index 1
//element orange
//index 2

var arr = ['banana','pinapple','orange']

arr.forEach(function(ele,i){
console.log {'element' + ${ele} + 'index' ${i}}


})

//explanation:
//First, create array
//Next, create your forEach function using 2 arguments, in this case item & index
	//item is the elements in the array
	//index is where they are in the array
//then console log to indicate the item name and the index (location in array)

var arr = ['banana','pinapple','orange']

arr.forEach(function(ele,i){
console.log (' element ' + ele + ' index ' + i )


})

//this one I got right but I just did ele + i until I realized what the 
//directions asked the console to say, then I fixed it. 




//write a forEach loop that loops through this example array 
//and checks if the type of each element is a string, 
//if it is it prints true, 
//and if it isn't it prints out false, 
//at the same time it needs to print out the indexes 
//of all iterations so that we can see which of them returned true!

var arr = ['banana',['hello'],12,true]
 //expected output
//true 0
//false 1
//false 2
//false 3


var arr = ['banana',['hello'],12,true]

arr.forEach(function(ele,i){
  console.log(typeof ele == 'string', i)

});

// I kept wanting to use strict equals her but 
//I know why this would not work now.



//write a forEach loop that loops through this example array and
// prints out the type of each element
var arr = [{name:'Pedrito'}, ['Banana'],false,34,'hello',null,undefined]

//expected output 
//object
//object
//boolean
//number
//string
//object
//undefined

var arr = [{name:'Pedrito'}, ['Banana'],false,34,'hello',null,undefined]

arr.forEach(function(ele){
	console.log(typeof ele)
})


// got it right first try


//create a forEach loop  that loops through the array below and 
//for each iteration if the element is divisible by 2, if it is
// it should print true, and if it isn't it should print false
var arr =[1435,656,3234,96747458]
//expected output
//false
//true
//true
//true

arr.forEach(function(ele){
	if (ele % 2 == 0)
		console.log(true)
 	else  {
 		console.log(false)
 }

});

// ran it first and got true for the true ones, and realized I needed
// to add an else for the false ones and it works. 

var arr =[1435,656,3234,96747458]

arr.forEach(function(element){
console.log(element %2 ==0)
})


//Write a 'for of' loop that goes through the given array and prints 
//out each element
//you should also concatenate each element with a sentence...
//example
//if the name is mike it should console.log
//expected output Hello NAME, how are you today?
//replace NAME with the value from the array

var arr  = ['mike','peter','luke','pedro','george','antonello']
for(var ele of arr){
	console.log( ' hello ' + ele + ' How are you?')

// got this one finally but I was typing var ele IN arr so I kept
// getting the index rather than the name. George gave me a hint
// and I realized what I did and viola! 


//write a forOf loop that loops through the following array 
//and sums 
//the numbers up in a variable called sum, once the loop
//is finished 
//you can console.log the following message:
//"the the sum of the elements in the array is 
//(here the actual sum)" 

var arr = [1,4,55,77,44,66,44,55]

//so if the sum is 200 it should console.log the
// the sum of the elements in the array is 200

//steps
//create a sum variable equal to zero
//push the sum to the new variable//
//console log it

var sum = 0
	

for(ele of arr){
	sum = sum + ele

}

console.log(`the sum of the elements in the array is ${sum}`)

// struggled starting with this one and over complicated 
//it. but realized it and was able to simplify it to this point 



//Create a forEach loop that loops through the given array 
//and multiplies each element inside it.
//The result should be assigned to a variable called sum.

// once done please console.log the following:
// the result of multiplying each number of the array is 
//(result goes here!)
//for example
//var arr = [2,4,10]
//should console.log()...
//the result of multyplying each number of the array is 80



var arr = [2,4,10]
var sum = 1
arr.forEach(function(element){
	sum = (element * sum)
})

console.log(`the result of multiplying each number is the array is ${sum}`)


// got this one but at first I forgot to make the sum 1 because everything multipled by 0 would be
//0, but I realized that and I also tried consoling logging inside and caught it. Overall
// had a good understanding of what I did wrong without having to spend much time figuring it out



//write a forEach loop that goes through the array using the method 
//push taking the elements of arr and placing them inside the arr2
//so your starting point is
//var arr =['john','mike','robert','peter','luke']
//var arr2= []

//expected output arr2 =["john", "mike", "robert", "peter", "luke"]


var arr =['john','mike','robert','peter','luke']
var arr2= []


arr.forEach(function(ele){
	arr2 = arr



})


console.log(arr2)

// I did the top first but did not use the push so I did 
//it with push below

var arr =['john','mike','robert','peter','luke']
var arr2= []


arr.forEach(function(ele){
	arr2.push(ele);



})

console.log(arr2)


//Still using the foreach loop and two arrays push the numbers 
//of arr to arr2 and multiply them by two on the way!

//starting point
//var arr = [2,3,65,22]
//var arr2 = []
                        
//expectd output
//arr2
//[4, 6, 130, 44]



var arr = [2,3,65,22]
var arr2 = []


arr.forEach(function(ele){
	arr2.push(ele * 2)


})

console.log(arr2)

//easy peasy! Woohoo!



//add the elements of arr to arr2 using the concat method
//your starting point is
//var arr = [1,2,3,4,5,65,23,6,'hello']
//var arr2  =[]

//expected output
//arr2
//[1, 2, 3, 4, 5, 65, 23, 6, "hello"]
//The concat() method is used to merge two or more arrays. 
//This method does not change the existing arrays, but instead returns a new array.

var arr = [1,2,3,4,5,65,23,6,'hello']
var arr2  =[]

var arr3 = arr.concat(arr2)

/*//got this one quick but had some trouble with the syntax at first because
//we do not use this much I had to look up concat and then I accidently did:

var arr2= arr2.concat(arr)

//I realized I needed to create a third array after look at this because it did not make send
// which led me to this:

var arr3 = arr1.concatarr2

//knew this was not right so I tried

var arr3 = arr1.(concatarr2)

//still not blue where I need it 

so tried this

var arr3 = arr1.(concat.arr2)

//still no blue

var arr3 = arr1.concat(arr2)

// now I tried to run it and still nothing... because I had arr1 and not arr2 :) Finally got 
//what I needed. */




// write a foreach loop that compares the numbers of the 
//two arrays with each other and returns true if they are the same and false if they are not.
//it should do a strict check to check that they are also of the same type
//so the below arrays should return


var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]

//EXPECTED OUTPUT 
//false
//true
//false
//false

var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]


arr.forEach(function(ele,i){
	console.log(arr[i] ===arr2[i])

})


// at first I had

var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]


arr.forEach(function(ele){
	console.log(arr[ele] ===arr2[ele])

})

//This gave me true false but not the expected output
//so I tried


var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]


arr.forEach(function(ele,i){
	console.log(arr[ele] ===arr2[ele])

})
// stared at it and realized that did nothing but give two arguments which I wasnt checking
//which led me to this

var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]


arr.forEach(function(ele,i){
	console.log(arr[i] ===arr2[i])

})
// I got the output I wanted but I was just moving things which means I did not understand what I 
//was checking. Now looking at it I understand what is happening and what I did wrong. 
// I needed an ele and i because ele was just comparing the elements, and I needed the 
//I (index) to compare each one


 
//now do the same exercise only this time ignore the type.
//expected output
//false
//true
//true
//false

var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]


var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]


arr.forEach(function(ele,i){
	console.log(arr[i] ==arr2[i])

})

// the expected output you have does not make sense? shouldn't it be:

//false, true, false, true

// my thoughts: 10 & 100 are false because not the same number; type doesnt matter this time
//20 & 20 are the same so true
//30  & 20 not the same value so false
//55 and 55 are the same value and type does not matter this time so they are true

// please explain your output for me.



//Using arr.includes loop through one of the array and check if
// it contains the element of the other array...
//it should console.log true if it does and false if it doesn't

//var arr = [10,20,30, '55']
//var arr2 = [100,20,20, 55]

//expected output
//false
//true
//true
//false

// steps:
//look up .includes because I forgot - check
//

var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]

arr2.forEach(function (i){
	console.log(arr.includes(i))

}

	)


// was on the right track with this one. I just accidently used .includes[i]
// when I should have used
//parenthesis. My logic was it was an array so I used [].



//take the original string which will contain some upper case characters, 
//then create a new variable which needs to contain all the caracter of the original string
// but all have to be lowercase, once you are done console.log the new variable

//You must use:
//a loop
//push
//join

// original sentence = Antonello LIKEs PlaYing GaMeS

// expected output           antonello likes playing games


var arr = 'Antonello LIKEs PlaYing GaMeS'
var arr2 =[]

for(var i = 0; i < arr.length; i++){
	arr2.push(arr[i].toLowerCase())

}

arr2=arr2.join('')


// had a lot of trouble with this one- lets review.



// TAKE THE BELOW STRING AND REVERSE THE ORDER OF THE LETTERS SO THAT IT MAKES SENSE;
//CONSOLE.LOG THE REVERSED LONG SENTENCE
//You must use:
//a loop
//push
//join
var str = 'reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I'

//expected output
//I love deep fried potatoes with mayo and with a nice pint of cold beer

var str = 'reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I'
var str2= []

for(var i = str.length; i >= 0; i--) {
	str2.push(str[i])
}

	str2 = str2.join('');


	// had a lot of trouble with this one- lets review.



//You went on vacation to Japan and now you came back and you need to 
//check your finance a bit and in order to do that you need to find out:

//the average expense per day in dollars, 

// each element of the array will be  the daily expense in japanese yen

// the conversion rate for yen to dollars is 0.0089

//please console.log the message as shown in the example and make sure you provide 
//us with a round number with no decimals...

var arr = [
        //monday
        '10003', 
        //tuesday
        '46733', 
        //wednesday
        '45833', 
        //thursday
        '3534', 
        //friday
        '57354',
        //satuy
        '45334',
        //sunday
        '34856'
        
]

var sum = 0
var dailyRate = 0

arr.forEach(function(ele){
sum = sum + (ele * 0.0089)


})

dailyRate = Math.round(sum / arr.length)

console.log(`you spent an average of ${dailyRate} per day on you trip to Japan.`)

// lets review together. I get it but I was stuck in some ways. 


