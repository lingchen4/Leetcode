const merge = (arr1, m, arr2, n) => {
  let max = m + n;
  while (max > 0) {
    if (m < 1) {
      arr1[--max] = arr2[--n];
      continue;
    }
    if (n < 1) {
      arr1[--max] = arr1[--m];
      continue;
    }
    if (arr1[m - 1] < arr2[n - 1]) {
      arr1[--max] = arr2[--n];
    } else {
      arr1[--max] = arr1[--m];
    }
  }
  return arr1;
};
