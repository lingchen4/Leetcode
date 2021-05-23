const maxArea = (height) => {
  let start = 0;
  let end = height.length - 1;
  let max = Number.MIN_VALUE;
  while (start < end) {
    if (height[start] > height[end]) {
      max = Math.max(max, height[end] * (end - start));
      end--;
    } else {
      max = Math.max(max, height[start] * (end - start));
      start++;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
