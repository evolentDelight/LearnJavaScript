// Fill in the regular expressions

//Match: car and cat
verify(/ca[rt]/,
  ["my car", "bad cats"],
  ["camper", "high art"]);

//Match: pop and prop
verify(/pr?op/,
  ["pop culture", "mad props"],
  ["plop", "prrrop"]);

//Match: ferret, ferry, and ferrari
verify(/ferr[et|y|ari]/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]);

//Match: any word ending in ious
verify(/.ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]);

//Match: Whitespace character followed by
// a period, comma, colon, or semicolon
verify(/\s[.,:;]/,
  ["bad punctuation ."],
  ["escape the period"]);

//Match: Word longer than six letters
verify(/\w{7,}/,
  ["Siebentausenddreihundertzweiundzwanzig"],
  ["no", "three small words"]);

//Match: word without the letter e or E
verify(/(^|\P{L})[^\P{L}e]+($|\P{L})/ui,
  ["red platypus", "wobbling nest"],
  ["earth bed", "bedrøvet abe", "BEET"]);


function verify(regexp, yes, no) {
// Ignore unfinished exercises
  if (regexp.source == "...") return;
  console.log("On ", regexp, ": ")
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
  console.log("If no failure or unexpected, Success\n")
}