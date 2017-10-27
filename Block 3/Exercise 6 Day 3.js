Exercise 6 Day 3

var arr = [{name:'Pedrito'}, ['Banana'],false,34,'hello',null,undefined]


arr.forEach(function(item){
	console.log('element', typeof item)

}) 

______________ or 



var arr = [{name:'Pedrito'}, ['Banana'],false,34,'hello',null,undefined]

for(var ele of arr){
    console.log(typeof ele)
}