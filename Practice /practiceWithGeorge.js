var whatever ='string' // create a string

typeof word // gives the tupe of the entire variable

// do not use typeof for each item you want to check the type of the entire array

var word = [1,2,3]
typeof arr [0]// for 1 and so on 

var foo = 10 
typeof foo 

var bar =15
typeof bar


foo == bar // check if values are the same - abstract equality
foo === bar // checks if value and type of. - strict equality

foo == '10'
foo == bar // true because 10 and '10' are equal because it only checks value

foo!=bar // this is checking the value only 

=//assign
==// checking something loosely
===// strict because you check value and type ; strictly not equal 

<= // checking equality
>= // 


/* “Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
For numbers which are multiples of both three and five print “FizzBuzz”.” */
//1. loop through 1 to 100
//2. check if a number divisble by 3
//3. check for 5
//4. check for 5 AND 3

for (var i=1; i<=100; i++ ){

	if (i % 3 ==0 && i % 5==0){ 
		console.log ('Fizzbuzz'); 
	}

	else if ( i %5 == 0) {
		console.log('Buzz');
	}

	else if ( i % 3 ==0){
		console.log ('Fizz');
	} else {
		console.log(i);
   }
}



    function calc (a,b,c){
        if(c == "+") {
            return a + b; {
      
       ;}
     }
  }

   calc(3,4, '+');


   // write a function wich takes one argument which
   // is a number and returns the same value as a string
   //numberTostring(10) =>


function numToStr (num) {
	return ""+num
}

numToStr(10)

//write a funtion called noIVA which calculated the price without IVA
//which is 21%
 //it takes one argument which is a number and returns the number
 //representing the price without IVA




function noIVA (total) {

		return total / 1.21  

}
noIVA(100)


If it costs 200 and you add 21% you get 242 




///return oppsite number


function opposite(num1) {
  return(-num);
}

opposite(10)

//write one function that takes one argument which is the language and it returns
// the gretting in the selected language


// write a function which takes two argument: name and the language and it
returns a personalized greeting in the selected language 
If no language is provided it defaults to English. 




function hello (username, language) {
	var world = {
	english: 'Welcome',
	czech: 'Vitejte',
	danish: 'Velkomst',
	dutch: 'Welkom',
	estonian: 'Tere tulemast',
	finnish: 'Tervetuloa',
	flemish: 'Welgekomen',
	french: 'Bienvenue',
	german: 'Willkommen',
	irish: 'Failte',
	italian: 'Benvenuto',
	latvian: 'Gaidits',
	lithuanian: 'Laukiamas',
	polish: 'Witamy',
	spanish: 'Bienvenido',
	swedish: 'Valkommen',
	welsh: 'Croeso',
	};
if (language===undefined){
	alert(world['english'] + ' ' + username);

}else if (world[language]===undefined){
	alert(world['english'] + ' ' + username);
	
}else {
	alert(world[language] + ' ' + username);
} 
}


hello('brie','russian')
