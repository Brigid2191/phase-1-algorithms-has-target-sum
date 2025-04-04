// index.js

/*
Pseudocode:
1. Define a function hasTargetSum that takes an array and a target sum.
2. Create an empty Set to store numbers we have seen.
3. Loop through the array:
   - For each number, calculate the complement (target - number).
   - Check if the complement exists in the Set.
   - If yes, return true.
   - Otherwise, add the number to the Set and continue.
4. If no pair is found, return false.
*/

// Function to check if any two numbers add up to the target
function hasTargetSum(array, target) {
  let seenNumbers = new Set();

  for (let num of array) {
    let complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true (3 + 7)
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true (19 + 6)
console.log(hasTargetSum([1, 2, 5], 4)); // false
console.log(hasTargetSum([1, 3, 6, 2], 9)); // false
console.log(hasTargetSum([0, -1, 2, -3, 1], -2)); // true (-3 + 1)
console.log(hasTargetSum([5, 10, 15, 20, 25], 35)); // true (10 + 25)

// Export function for testing
module.exports = hasTargetSum;

