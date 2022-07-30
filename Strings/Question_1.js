//////////// Backspace String Compare////////////////////
// Given two Strings S and T,
// Return if they are equal when both are typed out.
// Any '#' that appears in the strings counts as a backspace
// S: "ab#c" => "ac" and T: "az#c" => "ac"

// 1) Verify the constraints
// 2) List some test cases
// S: "ab#z"  T: "az#z" => True
// S: "abc#d" T: "acc#c" => False
// S: "x#y#z#" T: "a#"  => True
// S: "a###b" T: "b"  => True
// S : "Ab#z" T: "ab#z" => False

//////////////Brute Force Solution//////////////////

const buildString = function (strings) {
  const builtArr = [];
  for (let p = 0; p < strings.length; p++) {
    if (strings[p] !== "#") {
      builtArr.push(strings[p]);
    } else {
      builtArr.pop();
    }
  }
  return builtArr;
};

const backspaceCompare = function (S, T) {
  const finalS = buildString(S);
  const finalT = buildString(T);
  if (finalT.length !== finalS.length) {
    return false;
  } else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalT[p] !== finalS[p]) {
        return false;
      }
    }
  }
  return true;
};

console.log(backspaceCompare("Ab#z", "ab#z"));

// S input = a and T input = b
// Time: O(a+b)
// Space: O(a+b)

////////////////////Optimal Solution /////////////////////////

// const backspaceCompare = function (S, T) {
//   let p1 = S.length - 1;
//   let p2 = T.length - 1;
//   while (p1 >= 0 || p2 >= 0) {
//     if (S[p1] === "#" || T[p2] === "#") {
//       if (S[p1] === "#") {
//         let backCount = 2;
//         while (backCount > 0) {
//           p1--;
//           backCount--;
//           if (S[p1] === "#") {
//             backCount = backCount + 2;
//           }
//         }
//       }
//       if (T[p2] === "#") {
//         let backCount = 2;
//         while (backCount > 0) {
//           p2--;
//           backCount--;
//           if (T[p2] === "#") {
//             backCount = backCount + 2;
//           }
//         }
//       }
//     } else {
//       if (S[p1] !== T[p2]) {
//         return false;
//       } else {
//         p1--;
//         p2--;
//       }
//     }
//   }
//   return true;
// };
// console.log(backspaceCompare("ab#z", "ac#z"));

// Time: O(a + b)
// Space: O(1)
