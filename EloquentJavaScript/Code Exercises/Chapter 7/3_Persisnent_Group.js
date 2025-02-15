class PGroup {

  #array = []

  constructor(array){
    this.#array = array;
  }

  has(value){
    return this.#array.includes(value);
  }

  add(value){
    if(this.has(value)) return this;
    return new PGroup(this.#array.concat([value]));
  }

  delete(value){
    if(!this.has(value)) return this;
    return new PGroup(this.#array.filter(m => m !== value))
  }

  static empty = new PGroup([]);
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false

//Textbook Solution
  //Basically the exact same as my solution

/*  Notes
  Pgroup.empty is a simple variable and not a function
  This code requires a constructor to initialize variables
    Through this, you are able to not use add function as a method to add variables

*/