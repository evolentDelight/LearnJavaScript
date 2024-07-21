//My Solution
// function range(start, end){
//   const arr = [start];

//   for(let i = start+1; i <= end; i++){
//     arr.push(i);
//   }

//   return arr;
// }

function range(start, end, step){
  const arr = [start];

  if(!step && start > end){
    step = -1;
  }else if(!step && start < end){
    step = 1;
  }
  
  let i = start + step

  if(step > 0){
    while(i <= end){
      arr.push(i);
      i += step;
    }
    return arr;
  }
  else if(step < 0){
    while(i >= end){
      arr.push(i);
      i += step;
    }
    return arr;
  }
}

function sum(array){
  let sum = 0;
  for(let element of array){
    sum += element;
  }
  return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(2, 5, 3));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//Textbook Solution
// Range used ternary condition to determine 1 or -1 as default parameter
// simple and concise
// fewer lines of code
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}