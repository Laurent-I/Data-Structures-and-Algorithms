//////////////// Max Area Water Container ////////////////////////
// You are given an array of positive integers where each integer represents the height of a vertical line on a chart.
// Find two lines which together with the x-axis forms a container that would hold the greatest amount of water.
// Return the area of the water it would hold

// 1) Verify the constraints
// 2) List the test cases
// 3) Figure out solution without code

//Brute force solution

let array = [7, 1, 2, 3, 9];
//
// const getMaxWaterContainer = function (heights) {
//   let maxArea = 0;
//   for (let p1 = 0; p1 < heights.length; p1++) {
//     for (let p2 = p1 + 1; p2 < heights.length; p2++) {
//       const height = Math.min(heights[p1], heights[p2]);
//       const width = p2 - p1;
//       const currentArea = height * width;
//       maxArea = Math.max(maxArea, currentArea);
//     }
//   }
//   return maxArea;
// };
//
// //time: O(n^2)
// //space: O(1)
//
// console.log(getMaxWaterContainer(array));

//Optimal Solution
// The two shifting pointers
const getMaxWaterContainer = function (heights) {
  let p1 = 0;
  let p2 = heights.length - 1;
  let maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const currentArea = height * width;
    maxArea = Math.max(maxArea, currentArea);

    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
};

console.log(getMaxWaterContainer(array));

//time: O(n)
//space: O(1)
