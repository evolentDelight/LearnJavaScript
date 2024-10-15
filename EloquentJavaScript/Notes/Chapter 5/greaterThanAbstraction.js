function greaterThan(n) {
  console.log(n)
  return m => m > n;
}
let greaterThan10 = greaterThan(10); //Returns m => m > 10
console.log(greaterThan10(11));
// → true

/*
  The abstraction here is the
    Number to compare to
    Greater than function
*/