//Complete the square sum function so that it squares each number passed into it and then sums the results together

//example [1,2,2] should return 9 because 1^2+2^2+2^2 = 9
function squareSum(numbers){
//set numSum to 0 for us to add to it.
let numSum = 0;
for(i = 0;i<numbers.length;i++){numSum += numbers[i] * numbers[i];}
return numSum;
}