const lengthOfLongestSubstring = (s) => {
  let maxStr = "";
  let postIndex;
  let max = 0;
  let temp;
  for (let i = 0; i < s.length; i++) {
    temp = s[i];
    postIndex = maxStr.indexOf(temp);
    if (postIndex > -1) {
      maxStr = maxStr.substring(postIndex + 1);
    }

    maxStr += temp;
    max = Math.max(max, maxStr.length);
  }
  return max;
};

console.log(lengthOfLongestSubstring("bbb"));
