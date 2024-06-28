// Array.from()
// Creates a new, shallow-copied Array instance from an iterable or array-like object

// Syntax
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
// Returns a new Array instance

// arrayLike
//  An iterable or array-like object to convert to an arra
//  [Map, Set, Array, String, NodeList, ]
// mapFn
//  A function to call on every element of the array
//  Receives the following arguments (element, index)
// thisArg
//  "this" context binds any variable, object, etc.
//  Does not work with arrow functions because arrow functions can't be bound

// https://stackoverflow.com/questions/34556558/what-is-the-purpose-of-thisarg-in-foreach