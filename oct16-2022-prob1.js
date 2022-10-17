/*
testing 1-2-3  7kyu
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string.  Notice the colon and space between.

Examples:(INPUT->OUTPUT)
[] --> []
["a", "b", "c"] --> ["1: a", "2: b","3: c"]
*/

/*Steps
1)let myArr = array
so that we can receive the array and do stuff to it
2)let newArr = []
so that we can create a new array and add to it
3)for loop that goes through myArr and adds number(index+1) to the elements
4)for loop that adds the string contents of each element
 */

/* CODE HERE*/
var number = function(array){
    let myArr = [];
    for(i=0;i<array.length;i++){
     myArr.push((i+1) + ": " + array[i])}
      return myArr}
