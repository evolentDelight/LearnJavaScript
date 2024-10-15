//My Solution

let arrays = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]

function flatten(array){
  return array.reduce((a, b) => a.concat(b))
}

console.log(flatten(arrays))


//Textbook Solution

console.log(arrays.reduce((flat, current) => flat.concat(current), []));

//Differences
  //no need for a separate funciton
  //Adds initial value of [] to initialize the array(?)
    //Ensures that the process starts with an empty array rather than one of the sub-array
  //Literaly one line of code...