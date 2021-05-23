const removeDuplicates = (arr) => {
  let [curr, next] = [0, 0];
  while (next < arr.length) {
    if (arr[curr] !== arr[next]) {
      arr[++curr] = arr[next];
    }
    next++;
  }
  console.log(arr);
  return curr + 1;
};

console.log(removeDuplicates([1, 1, 2, 2, 5, 6]));
