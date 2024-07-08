//My Solution
let size = 8;//grid size input
let output = "";
let position = 0;//even for " ", odd for "#"
for(let n = 0; n < size; n++){
  for(let i = 0; i < size; i++){
    if( position % 2 === 0 ) {
      output += " ";
      } else{
      output += "#";
      }
    position++;
  }
  if( size % 2 == 0) position++;//Determines the correct grid character
  output += "\n";
}
console.log(output);

//Textbook Solution
size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
//Apparently for loop's (x + y) bindings work...