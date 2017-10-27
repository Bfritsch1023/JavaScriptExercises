
check the following and console.log true if they are arrays and false if they are not, you will need to research a bit as this hasn't been covered.
var one   = {name:'antonello'}
var two   = ['name', 'antonello']
var three = [[],[],{},"antonello",3,function(){}]

//expected output 
false
true
true

var one   = {name:'antonello'}
var two   = ['name', 'antonello']
var three = [[],[],{},"antonello",3,function(){}]

console.log (
Array.isArray(one)
Array.isArray(two)
Array.isArray(three)
)



The Array.isArray() function determines whether the passed value is an Array.
true if the object is an Array; otherwise, false.