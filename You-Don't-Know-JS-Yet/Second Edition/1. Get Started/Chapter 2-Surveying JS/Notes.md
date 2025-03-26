## Vocabs
### Delimit
  * differentiates code that serves a unique purpose
    * string("", '', ``), array([, , ,]), 
    * kind of like keywords
  * ensures JavaScript properly parse and interpret those codes

### Interpolation
  * Embedding or inserting variables, values, or expressions into a construct like a string to dynamically generate content

## Best Practice:
`undefined` vs `null`
  * use `undefined` as an empty value over null

`==` vs `===`
  * `==` is a coersion equality; takes into account type conversion
  * `===` strict equality; does not takes into account type conversion

`<`, `<=`, `>`...
  * Takes type conversion equality first
  * probably best to stick with numeric variables
    * or at least one numeric variable and never between string variables
      * `"10" < "9"` ends up being true
