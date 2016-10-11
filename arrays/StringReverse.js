/**
 * Created by dmitrymogilko on 03/10/2016.
 */

function reverseString(str){
  "use strict";

  if(!str || str.length <=1){
    return str;
  }
  var firstIndex = 0,lastIndex = str.length -1;
  while(firstIndex < lastIndex){
    var temp = str[firstIndex];
    str[firstIndex] = str[lastIndex];
    str[lastIndex]   = temp;
    firstIndex++;
    lastIndex --;
  }
  return str;
}
console.log("We here");
var str  = 'abc';
console.log(str);
var strReverse = reverseString(str.split('')).join('');
console.log(strReverse);

//test cases
// empty string
// one character string
// null string
//undefined
// odd number of chars
// even number of chars



