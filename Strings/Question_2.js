///////////////Longest Substring without repeat/////////////////
// Given a string, find the length of the longest substring without repeating characters
// "abccabb" => abc or cab

// 1) Is the substring contiguous
// substring or subsequence

////////////////////Brute Force Solution/////////////////////////
// const lengthOfLongestSubstring = function (S) {
//   if (S.length <= 1) {
//     return S.length;
//   }
//   let longest = 0;
//   for (let left = 0; left < S.length; left++) {
//     let seenChars = {},
//       currentLength = 0;
//     for (let right = left; right < S.length; right++) {
//       const currentChar = S[right];
//       if (!seenChars[currentChar]) {
//         currentLength++;
//         seenChars[currentChar] = true;
//         longest = Math.max(longest, currentLength);
//       } else {
//         break;
//       }
//     }
//   }
//   return longest;
// };
//
// console.log(lengthOfLongestSubstring("abccbda"));
// Time = O(n^2)
// Space = O(n)

////////////////////////Optimal Solution//////////////////////
// Using Sliding Window
// const lengthOfLongestSubstring = function (S) {
//   if (S.length <= 1) return S.length;
//   const seenChars = {};
//   let left = 0,
//     longest = 0;
//   for (let right = 0; right < S.length; right++) {
//     const currentChar = S[right];
//     const prevSeenChar = seenChars[currentChar];
//     if (prevSeenChar >= left) {
//       left = prevSeenChar + 1;
//     }
//     seenChars[currentChar] = right;
//     longest = Math.max(longest, right - left + 1);
//   }
//   return longest;
// };
// console.log(lengthOfLongestSubstring("abccbda"));
// Space : O(n)
// Time: O(n)
