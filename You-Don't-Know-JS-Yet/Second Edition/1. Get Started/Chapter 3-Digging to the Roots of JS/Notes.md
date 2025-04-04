## Concepts
### Shallow-copy & Deep-copy
* Shallow-copy affects nested objects by referencing it rather than copying it
  * Methods and Operators that create shallow copies
    * `...object` Spread Operator
    * `Object.assign()`
    * `Array.prototype.slice()`
    * `Array.prototype.concat()`
    * `Array.from()`
* Deep-copy copies all without any references to the original object, thus changing the value in one variation will not affect the other.
  * But internal references to the shared object will be preserved
  * Methods that create deep copies; Does not support nested functions
    * `structuredClone()` from Window API/interface
    * `lodash.cloneDeep()`

### Array Iteration
  * `array.keys()` Keys only iterator
  * `array.values()` Values only iterator
  * `array.entries()` Entries: Index and Value iterator

## `this` Keyword
  * `this` references to context object
    * Can be block-scoped object
    * `this`-aware functions are able to attain dynamic context
      * in other languages, this would refer to the object that it was defined in. Whereas in JS, this refers to the function that it is called, thus dynamic.
  * it is a characteristic of function execution

## Prototypes
  * Prototype is a characteristic of an object
  * It allows access to other properties beyond what the originally defined object's properties.
    * `Object.prototype.toString()`