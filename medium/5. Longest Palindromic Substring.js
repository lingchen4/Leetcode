const longestPalindrome = (s) => {
  if (s.length < 2) return s;
  let lpStartIndex = 0,
    lpEndIndex = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;
      while (left > 0 && right < s.length && s[left] === s[right]) {
        if (right - left > lpEndIndex - lpStartIndex) {
          lpStartIndex = left;
          lpEndIndex = right;
        }
        left--;
        right++;
      }
    }
  }

  return s.slice(lpStartIndex, lpEndIndex + 1);
};

console.log(longestPalindrome("aaaabbaa"));
console.log(longestPalindrome("aaaabbaaa"));
