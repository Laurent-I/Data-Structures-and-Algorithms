////////////// Trapping rain water ///////////////////////////
// Given an array of integers representing an elevation map where the width of each bar is 1;
// Return how much rainwater can be trapped.
// 1) Verify the constraints
// 2) List the test cases

//Brute Force Solution
let array = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
//
// const getTrappedRainwater = function (heights) {
//   let totalWater = 0;
//   for (let p = 0; p < heights.length; p++) {
//     let leftP = p,
//       rightP = p,
//       maxLeft = 0,
//       maxRight = 0;
//     while (leftP >= 0) {
//       maxLeft = Math.max(maxLeft, heights[leftP]);
//       leftP--;
//     }
//     while (rightP < heights.length) {
//       maxRight = Math.max(maxRight, heights[rightP]);
//       rightP++;
//     }
//     const currentWater = Math.min(maxLeft, maxRight) - heights[p];
//     if (currentWater >= 0) {
//       totalWater += currentWater;
//     }
//   }
//   return totalWater;
// };
// console.log(getTrappedRainwater(array));

// Space = O(1)
// Time = O(n^2)

//Optimal Solution
// Using Two Pointers
// 1) identify pointer with lesser value
// 2) is this pointer value lesser than or equal to max on that side
//   if yes -> update max on that side
//   if no -> get water for pointer value, add to total
// 3) move pointer inwards
// 4) repeat for the other pointer

// const getTrappedRainwater = function (heights) {
//   let left = 0,
//     right = heights.length - 1,
//     leftMax = 0,
//     rightMax = 0,
//     total = 0;
//   while (left < right) {
//     if (heights[left] <= heights[right]) {
//       if (heights[left] >= leftMax) {
//         leftMax = heights[left];
//       } else {
//         total += leftMax - heights[left];
//       }
//       left++;
//     } else {
//       if (heights[right] >= rightMax) {
//         rightMax = heights[right];
//       } else {
//         total += rightMax - heights[right];
//       }
//       right--;
//     }
//   }
//   return total;
// };
//
// console.log(getTrappedRainwater(array));

// Space = O(1)
// Time = O(n)
