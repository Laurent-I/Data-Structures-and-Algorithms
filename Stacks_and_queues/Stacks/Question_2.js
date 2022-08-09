///////////////////// Minimum Brackets To Remove To Make Valid //////////////////
// Given a string only containing round brackets '(' and ')' and lowercase characters,
// Remove the least amount of brackets so the string is valid.
// A string is considered valid if it is empty or if there are brackets, they all close.

// "a)bc(d)"

// const minBracketsToRemove = function (str) {
//   const res = str.split("");
//   const stack = [];
//
//   for (let i = 0; i < res.length; i++) {
//     if (res[i] === "(") {
//       stack.push(i);
//     } else if (res[i] === ")" && stack.length) {
//       stack.pop();
//     } else if (res[i] === ")") {
//       res[i] = "";
//     }
//   }
//   while (stack.length) {
//     const currentIndex = stack.pop();
//     res[currentIndex] = "";
//   }
//   return res.join("");
// };
//
// console.log(minBracketsToRemove("a)bc(d)"));

// Space: O(n)
// Time O(n)
