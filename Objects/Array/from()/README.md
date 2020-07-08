Array.from() <br>
Converts array-like or iterable object to an array

Array.from(arrayLike,    mapFn,  thisArg)
Parameters:(required, optional, optional)

arrayLike - array-like or iterable object to convert
mapFn - .map() function
thisArg - MDN: "Value/Variable/Object to use as this when executing mapFn"
    mapFn utilizes the value/variable/object via "this"
    https://stackoverflow.com/questions/34556558/what-is-the-purpose-of-thisarg-in-foreach
    Can be utilized with function expressions/declarations but not arrow functions - not bound

Objects can utlize .from() by having a "length" property
    Having a "length" property allows the object to become iterable
    Other properties are ignored even strings and arrays
*Objects must have length for the array to exist.