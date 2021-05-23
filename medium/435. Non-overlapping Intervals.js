const eraseOverlapIntervals = (arr) => {
  arr.sort((a, b) => a[1] - b[1]);
  let pre = arr[0],
    remove = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] < pre[1]) {
      remove++;
    } else {
      pre = arr[i];
    }
  }
  return remove;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [2, 4],
    [1, 3],
  ])
);
