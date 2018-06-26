# typeOf.js

typeOf.js is a lightweight and efficient JavaScript Type-checking utility.
Since, the `typeof` operator in JavaScript is not reliable, i created this utility that efficiently tells the Data Type of a value.

# Examples
Below are type-checking examples of common types:

```javascript
    typeOf( "Hello world" ); // "string"
    typeOf( 5 ); // "number"
    typeOf([ 1, 2, 3 ]); // "array"
    typeOf({ a: 1, b: 2, c: 3 }); // "object"
    typeOf( function(){} ); // "function"
    typeOf( new Date() ); // "date"
    typeOf( true ); // "boolean"
    typeOf( /.*/ ); // "regexp"
    typeOf( new Error() ); // "error"
    typeOf( null ); // "null"
    typeOf(); // "undefined"
    typeOf( new Symbol() ); // "symbol"
    typeOf( function* gen(){} ); // "generatorfunction"
```

Thanks.
Oyedele Hammed Horlah <http://www.oyedelehammed.ml>