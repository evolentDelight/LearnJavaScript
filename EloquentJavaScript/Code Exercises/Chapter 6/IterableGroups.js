//My Solution == Textbook
class Group {

  #array = []

  has(value){
    return this.#array.includes(value);
  }

  add(value){
    if(!this.has(value)){
      this.#array.push(value);
    }
  }

  delete(value){
    this.#array = this.#array.filter(v => v !== value);
  }

  static from(object){
    let newGroup = new Group();

    for(let item of object){
      newGroup.add(item);
    }

    return newGroup;
  }

  [Symbol.iterator](){
    return new GroupIterator(this.#array);
  }
}

class GroupIterator{
  #array;
  #position

  constructor(array){
    this.#array = array;
    this.#position = 0;
  }

  next(){
    if(this.#position >= this.#array.length){
      return{done: true};
    } else{
      let result = {value: this.#array[this.#position],
        done: false};
      this.#position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

//Not much to be said
  //Learned how Symbol.iterator works
  //built own iterator via next(), return {value, done}