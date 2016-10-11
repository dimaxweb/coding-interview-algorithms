/**
 * Created by dmitrymogilko on 03/10/2016.
 */

/// algorithm :
// 1. find the characters
// 2. remove the character
// 3. update existing characters
function removeDuplicates(str){
  "use strict";
  if(!str || str.length <=1){
    return str;
  }
  var head = str.length  -1;
  var i = 0;
  var j=0;

  for(i=0;i<str.length;i++) {
    j  = i   + 1;
    for(;j<str.length;j++){
      if(str[i]==str[j]){
        if(str[j]==str[head]){
          while(str[head]==str[j] && head > 0){
            str[head]  = null;
            head --;
          }
        }
        str[j]= str[head];
        str[head] = null;
        head--;
      }
    }
  }

  return str;
}

var str = 'abcdaade';
console.log("Original string:",str);
var strWithoutDuplicates = removeDuplicates(str.split(''));
console.log(strWithoutDuplicates.join(''));


