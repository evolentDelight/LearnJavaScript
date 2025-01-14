//My Solution

class Group{
  array = [];

  Group(){

  }

  has(value){
    return this.array.includes(value);
  }

  add(value){
    if(!this.has(value)){
      this.array.push(value);
    }
  }

  delete(value){

    if(this.has(value)){
      index = this.array.indexOf(value);
      this.array.splice(index, 1);
    }
  }

  static from(object){
    for (const item of object){
      this.add(item);
    }
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