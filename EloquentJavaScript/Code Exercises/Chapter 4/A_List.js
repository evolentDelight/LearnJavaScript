//My Solution

function arrayToList(array){
  let List = {
    value: array[0],
    rest: null,
  };
  let ph = List;

  for(let i = 1; i < array.length; i++){
    let next = {
      value: array[i],
      rest: null,
    }
    ph.rest = next;
    ph = ph.rest;
  }

  return List
}

function listToArray(list){
  let next = list;
  const array = [];

  while(next != null){
    array.push(next.value);
    next = next.rest;
  }

  return array;
}

//console.log(arrayToList([30, 40, 50]));
//console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(value, list){
  let result = {
    value: value,
    rest: list
  }
  return result
}

//console.log(prepend(10, prepend(20, null)));

function nth(list, position){
  let iterator = list;//iterates until position
  let count = 0;//Counter until position
  let result;

  while(count <= position){
    if(count == position){
      if(!iterator){
        result = undefined;
        break;
      }
      result = iterator.value;
      break;
    }
    iterator = iterator.rest;
    count++;
  }

  return result;
}

//console.log(nth(arrayToList([10, 20, 30]), 1));

function Rnth(list, position){//Recursive Version
  if(position == 0) return list.value;
  else if(list.rest == null) return undefined;
  else return Rnth(list.rest, --position);
}

//Analysis
/*
  arrayToList from textbook uses a backward implementation because it's easier
    It prepends the previous as "rest"

  listToArray uses a for loop with "node" as iterator
    by placing "node" as the condition for stopping, the null stops the loop
  
  prepend has fewer lines of code...

  nth(Recursive) by checking the current list as null, it can be quickly spotted as undefined
  
*/

// Textbook Solution
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}