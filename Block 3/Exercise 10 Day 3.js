Exercise 10 Day 3

var arr = [1,4,55,77,44,66,44,55]

var sum = 1

arr.forEach(function(item){
		sum = (item * sum)
	})

console.log (`the result of multiplying each number of the array is ${sum}`)