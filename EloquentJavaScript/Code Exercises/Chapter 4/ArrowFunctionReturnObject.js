/* Trying to understand what this paragraph means
This means that braces have two meanings in JavaScript.
At the start of a statement, they begin a block of statements.
In any other position, they describe an object.
Fortunately, it is rarely useful to start a statement with an object in braces,
  so the ambiguity between these two is not much of a problem.
The one case where this does come up is when you want to return an object
  from a shorthand arrow function—you can’t write n => {prop: n}
  since the braces will be interpreted as a function body.
Instead, you have to put a set of parentheses around the object to make it clear
  that it is an expression.

*/


let func = n => ({prop : n})

console.log(func(`hello`))