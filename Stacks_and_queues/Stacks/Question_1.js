/////////////////////// Valid Parentheses //////////////////
// Given a string containing only parentheses, determine if it is valid.
// The string is valid if all parentheses close

// valid === "{([])}" or not valid === "{([])]"

const parentheses = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const isValidParentheses = function (s) {
  if (s.length === 0) return true;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (parentheses[s[i]]) {
      stack.push(s[i]);
    } else {
      const leftBracket = stack.pop();
      const correctBracket = parentheses[leftBracket];
      if (s[i] !== correctBracket) return false;
    }
  }
  return stack.length === 0;
};

console.log(isValidParentheses("{([])}"));

// Space: O(n)
// Time: O(n)
