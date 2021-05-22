const subsets = (arr) => {
  let res = arr.reduce(
    (pre, curr) => pre.concat(pre.map((e) => [...e, curr])),
    [[]]
  );

  return res;
};

// solution 2
const subsets2 = (arr) => {
  let res = [[]];
  for (let i = 0; i < arr.length; i++) {
    let l = res.length;
    for (let j = 0; j < l; j++) {
      res.push(res[j].concat(arr[i]));
    }
  }
  return res;
};
console.log(subsets2([1, 2, 3]));
