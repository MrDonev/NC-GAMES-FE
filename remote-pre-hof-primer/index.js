function doubleNum(num) {
  // write your function logic here
  return num * 2;
}

// Write your own *assertions* for doubleNum here
console.log('I expect:');
console.log(doubleNum(1));
console.log('to be:');
console.log(2);

function doubleManyNums(nums) {
  // write your function logic here
  return nums.map((el) => el * 2);
}

// Write your own *assertions* for doubleManyNums here
console.log('I expect:');
console.log(doubleManyNums([3, 5, 8]));
console.log('to be:');
console.log([6, 10, 16]);
