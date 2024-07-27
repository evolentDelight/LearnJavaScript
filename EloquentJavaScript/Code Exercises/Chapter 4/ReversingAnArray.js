//My Solution
function reverseArray(array){
  const result = [];

  for(let i = 0; i < array.length; i++) result.unshift(array[i]);

  return result
}

function reverseArrayInPlace(array){
  for(let i = 0; i < Math.floor(array.length/2); i++){
    let ph = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = ph;
  }
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

//Textbook Solution

function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

//Practically the same