const isPalindrome = (s) =>{
  s = s.replace(/[^\w]|_/gi, '').toLowerCase()

  let l =0, r = s.length-1;
  while(l<r){
    if(s[l++] !== s[r--]){
      return false;
    }
  }
  return true
}

console.log(isPalindrome("ab_a"))