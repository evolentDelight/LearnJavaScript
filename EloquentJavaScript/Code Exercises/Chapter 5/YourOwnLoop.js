//My Solution

function loop(value, test, update, body){
  while(test(value)){
    body(value);
    value = update(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

//Textbook Solution

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

//Differences
  //Textbook used a for loop and added the required parameters with the loop functions

//Questions
  //What is the difference between while loop and for loop?
    //Are there complexities differences? Time and Space?