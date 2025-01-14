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