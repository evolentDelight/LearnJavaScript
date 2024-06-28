<h2>Array Static Methods</h4>
<h4>Array.from()</h4>
Creates a new, shallow-copied Array instance from an iterable or array-like object and returns the newly created array
<h4>Array.fromAsync()</h4>
Basically Array.from() but for Async or Promised iterables
<h4>Array.isArray()</h4>
Checks if the passed value is an Array
Returns true or false
Does not return true for: Uint8Array(), Int16Array.
.isArray() is preferred over instanceof "because it works across realms"
<h4>Array.of()</h4>
Creates a new Array instance from a variable number of arguments
of() vs constructor
Array.of(7); // [7]
Array(7); // array of 7 empty slots