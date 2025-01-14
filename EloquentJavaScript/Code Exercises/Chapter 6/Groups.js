//My Solution

class Group{

  #array = [];

  constructor(array){
    this.#array = array;
  }

  has(value){
    return this.#array.includes(value);
  }

  add(value){
    if(!this.has(value)){
      this.#array.push(value);
    }
  }

  delete(value){
    if(this.has(value)){
      let index = this.#array.indexOf(value);
      this.#array.splice(index, 1);
    }
  }

  static from(object){
    let newCollection = [];
    for (const item of object){
      newCollection.push(item)
    }
    console.log(newCollection)
    return new Group(newCollection);
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

//Textbook Solution
class Group {
  #members = [];

  add(value) {
    if (!this.has(value)) {
      this.#members.push(value);
    }
  }

  delete(value) {
    this.#members = this.#members.filter(v => v !== value);
  }

  has(value) {
    return this.#members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

//Differences
//Didn't follow directions and added wrong constructor
  //Creating a new group and using its add method would have sufficed
    //As shown in the textbook solution
//Delete uses filter which is one line code VS my two line code using splice
