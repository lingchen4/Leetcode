// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

const sortColors = (arr) => {
  let leftBlock = 0,
    curr = 0,
    rightBlock = arr.length - 1;
  while (curr <= rightBlock) {
    if (arr[curr] === 0) {
      [arr[curr], arr[leftBlock]] = [arr[leftBlock], arr[curr]];
      leftBlock++;
      curr++;
    } else if (arr[curr] === 2) {
      [arr[curr], arr[rightBlock]] = [arr[rightBlock], arr[curr]];
      rightBlock--;
    } else {
      curr++;
    }
  }
  return arr;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));

console.log(sortColors([1, 0, 1]));
