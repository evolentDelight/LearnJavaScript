//My Solution
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
}

