//////////////////// Valid Palindrome ////////////////////////
//Given a string, determine if it is a palindrome,
// Considering only alphanumeric characters and ignoring case sensitivity

// Example: " A man, a plan, a canal: Panama" returns True
// Identify some test cases

// const isValidPalindrome = function (S) {
//   S = S.replace(/[^A-Za-z\d]/g, "").toLowerCase();
//   let p1 = 0;
//   let p2 = S.length - 1;
//   while (p1 < p2) {
//     if (S[p1] !== S[p2]) {
//       return false;
//     }
//     p1++;
//     p2--;
//   }
//   return true;
// };
// console.log(isValidPalindrome("A man, a plan, a canal: Panama"));
