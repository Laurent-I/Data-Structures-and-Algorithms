////////////////////////Almost A Palindrome //////////////////////////////
//Given a string, determine if it is almost a palindrome.
//A string is almost a palindrome by removing 1 letter.
// Consider only alphanumeric characters and ignore the case sensitivity
let test = "abccdba";

const validSubPalindrome = function (string, left, right) {
  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const almostPalindrome = function (string) {
  let left = 0,
    right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) {
      return (
        validSubPalindrome(string, left + 1, right) ||
        validSubPalindrome(string, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

console.log(almostPalindrome(test));
