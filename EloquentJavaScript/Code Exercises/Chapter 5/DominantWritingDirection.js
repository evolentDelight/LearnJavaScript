const SCRIPTS = require('./scripts.js')

//My Solution

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find(c => c.name == name);
    if (!known) {
      counts.push({name, count: 1});
    } else {
      known.count++;
    }
  }
  return counts;
}

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts
}

function dominantDirection(text){
  let scripts = textScripts(text);

  //Find highest count or Majority count of the language within the text
  const MajorityLanguage = scripts.reduce((max, text) =>{
    return (text.count > max.count) ? text : max;
  }, scripts[0])

  //Find Script by name and get its direction
  return SCRIPTS.find(script => script.name === MajorityLanguage.name).direction;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

//Textbook Solution
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

//Differences
  //Their dominantDirection function is the textScripts from Chapter 5 but it counts by reduce
  //Misread the countBy and didn't notice its capability to traverse each character
    //Hence, the extra code to find Majority count of the language and find script in SCRIPTS by name
      //AND, print its writing direction.