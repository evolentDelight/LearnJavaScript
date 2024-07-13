//My Solution

function isEven(num){//Accepts only positive, whole numbers
  //Check if number is positive
  if(num < 0) return "Not a positive number. Please enter a positive number";
  //Check if number is a whole number
  if(!Number.isInteger(num)) return "Not a whole number. Please enter a whole number";

  if(num === 0) return true;
  else if(num === 1) return false;

  return isEven(num-2);
}

console.log(isEven(5));

//Textbook Solution
function isEven(n){
  if(n == 0) return true;
  else if(n == 1) return false;
  else if(n < 0) return isEven(-n);
  else return isEven(n - 2);
}

// Textbook solution chose to negate the negative number to have the function
//  continue working as its purpose.