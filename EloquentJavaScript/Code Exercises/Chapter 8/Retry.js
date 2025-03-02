class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for(;;){
    try{
      let result = primitiveMultiply(a,b);
      return result;
    }catch(e){
      console.log(e.name + ": " + e.message);
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64

//Textbook Solution

/*
function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
    }
  }
}
*/

//Differences:
  //instead of initializing a variable to hold the return, MH simply returns it
    //this is due to the catch already being taken into consideration
  //There is no Error logged into console.