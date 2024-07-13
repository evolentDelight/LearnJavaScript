//My Solution

function countBs(string){//Returns how many uppercase Bs there are
  return countChar(string, "B");
}

console.log(countBs("BBC")) // 1

function countChar(string, char){
  let count = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i] === char) count++;
  }
  return count;
}

console.log(countChar("kakkerlak", "k"));

//Textbook Exercises

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

//Not much difference beside += 1 vs ++