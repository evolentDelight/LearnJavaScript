// My Solution

//Definition of Every Function
  //The given test function returns true for EVERY element in the array

function everyLoop(array, test) {//Loop Version
  for(let element of array){
    if(!test(element)) return false;
  }
  return true;
}

function everySome(array, test) {//Some Version
  return array.some(test)
}

console.log("\nTesting everyLoop===")
console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true

console.log("\nTesting everySome===")
console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true

//Textbook Solutions

function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}

//Differences
  //every with Loop are not different
  //every with Some method
    //De Morgan's Law... First time seeing it...
    //a && b === !(!a || !b)
    //Because .some method is a matter of || operator between the elements after predicate/test
      //by applying that law with adjustments, you get a && b
      //Mind Blown... but took too long trying to figure that out.
        //Learning efficiency issue...
          