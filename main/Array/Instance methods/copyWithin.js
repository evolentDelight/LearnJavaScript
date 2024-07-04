Array.prototype.copyWithin();

// Shallow copies the commanded part of the array into its array

//Syntax
//copyWithin(target, start)
//copyWithin(target, start, end)

//Example

const arr1 = [1, 2, 3, 4, 5];

console.log(arr1.copyWithin(1, 2))
//should be 1, 3, 4, 5, 5

//Useful for data manipulation tasks