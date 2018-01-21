/** typeOf.js | Reliable JavaScript Type-checking Utility
  * @author Oyedele Hammed Horlah
  * @version 1.0
  * @since January 21, 2018
  * @see https://github.com/Horlahcoded/typeOf.js
*/
function typeOf( value ) {
  return {}.toString.call( value ).slice( 8, -1 ).toLowerCase();
}