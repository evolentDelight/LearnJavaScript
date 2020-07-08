Array.from() <br>
Converts array-like or iterable object to an array

Array.from(arrayLike,    mapFn,  thisArg)
Parameters:(required, optional, optional)

arrayLike - array-like or iterable object to convert<br>
mapFn - .map() function<br>
thisArg - MDN: "Value/Variable/Object to use as this when executing mapFn"<br>
-   mapFn utilizes the value/variable/object via "this"<br>
-   https://stackoverflow.com/questions/34556558/what-is-the-purpose-of-thisarg-in-foreach<br>
-   Can be utilized with function expressions/declarations but not arrow functions - not bound<br>

Objects can utlize .from() by having a "length" property<br>
-   Having a "length" property allows the object to become iterable<br>
-   Other properties are ignored even strings and arrays<br>
*Objects must have length for the array to exist.