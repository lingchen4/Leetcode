const plusOne = (digits) => {
  let i = digits.length - 1;
  let flag = true;
  while (i > -1 && flag) {
    digits[i] = digits[i] + 1;
    if (digits[i] > 9) {
      digits[i] = 0;
      i--;
    } else {
      flag = false;
    }
  }
  if (digits[0] === 0) digits.unshift(1);
  return digits;
};

console.log(plusOne([9, 9, 8]));
