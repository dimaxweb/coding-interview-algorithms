/**
 * Created by dmitrymogilko on 06/10/2016.
 */

//first solution
//1 . run over the string and find number of indexes found
//2.  define array with size of str + number of indexes found
//3. run over the str and when index found just replace by '%20'

function encodeString(str){
  var count = 0,len = str.length;
  str  = str.split('');
  for(var i=0;i<len;i++){
    if(str[i]===' '){count++};
    
  }
  var newArr = [len + count*2];
  var j=0;
  for(var i=0;i<len;i++){
    if(str[i] === ' '){
      newArr[j++] = '%'
      newArr[j++] = '2';
      newArr[j++] = '0';
    }
    else{
      newArr[j++] = str[i];
    }
  }

  return newArr.join('');
}

var str  = " d";
var newStr  = encodeString(str);
console.log("Original String is :",str);
console.log("After the replace:",newStr);

//tests
//1 . empty string , null
//string containing continuos spaces
// string with one character - space
// string with one character - not space
//string without spaces
//string with containg %20
var expect = require('chai').expect;
expect(1).to.be.a('number');



