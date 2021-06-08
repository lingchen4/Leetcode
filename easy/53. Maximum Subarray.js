let test = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// using kadane's Algorithmn

const maxSubarray = (arr) => {
  let currMax = arr[0];
  let GlobalMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currMax = Math.max(arr[i] + currMax, arr[i]);
    GlobalMax = Math.max(GlobalMax, currMax);
  }

  return GlobalMax;
};

console.log(maxSubarray(test));
