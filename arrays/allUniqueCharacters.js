/**
 * Created by dmitrymogilko on 06/10/2016.
 */

function isUniqueCharacters(str){
  "use strict";
   var unique = true;
   var arrStr = str.split('');
   var charactersHash = {};
   for(var i=0;i<arrStr.length;i++){
     if(charactersHash[arrStr[i]]){
       unique = false;
       break;
     }

     charactersHash[arrStr[i]] = true;
   }
   return unique;
}
var str = "fbacd  l";

var isUniqueCharacters = isUniqueCharacters(str);

console.log("String is :",str);
console.log("Is unique:",isUniqueCharacters);




