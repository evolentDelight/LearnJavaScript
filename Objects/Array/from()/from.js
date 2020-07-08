const array1n = [1, 2, 3];
const array1s = ["a", "b", "c"];
const string1 = "Supercalifragilisticexpialidocious";
const object1 = {length: 10};

//array1n example
let display1n = Array.from(array1n);
console.log("array1n", display1n)

//array1s example
let display1s = Array.from(array1s);
console.log("array1s", display1s)

//string1 example
let displaystring1 = Array.from(string1);
console.log("string1", displaystring1)

//object1 example
let displayobject1 = Array.from(object1);
console.log("object1", displayobject1)
console.log("Array.length: ", displayobject1.length)

//mapFn
display1n = Array.from(array1n, x => x * 2);
console.log("array1n-mapFn", display1n)

//thisArg
console.log("\n","thisArg","\n")
var object = {importantvalue: 5};

display1n = Array.from(array1n, function(x){ return this.importantvalue * x }, object);

console.log(display1n);