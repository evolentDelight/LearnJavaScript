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