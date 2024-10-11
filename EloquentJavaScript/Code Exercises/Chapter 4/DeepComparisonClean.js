//My Solution

function deepEqual(val1, val2){
  if(val1 === null || val2 === null) return "null"
  //if(val1 && val2 && typeof val1 === "object" && typeof val2 === "object"){// Alternative
  if(typeof val1 === "object" && typeof val2 === "object"){
    //Deep Comparison
    val1Keys = Object.keys(val1);
    val2Keys = Object.keys(val2);

    if(val1Keys.length === val2Keys.length){//Check if both objects have same properties
      for(let i = 0; i < val1Keys.length; i++){
        if(val1Keys[i] === val2Keys[i]){//Properties compared
          return deepEqual(val1[val1Keys[i]], val2[val2Keys[i]]);
        }
        else return false
      }
    }
  }
  else{
    //Ultimate Check after Recursions
      //Compare Values and Properties, NOT Object. We are comparing its content
    if(val1 === val2) return true;
    else return false;
  }
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {are: {an: "an"}}, object: 3}))
// → false

//Textbook Solution

function TSdeepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

//Differences
  //TSolution adds Recursion call into an OR-IF statement
  