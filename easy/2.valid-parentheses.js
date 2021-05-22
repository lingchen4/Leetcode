const valid_parentheses = (str) =>{
  let dic = {
    ")" : "(",
    "]" : "[",
    "}" : "{"
  }

  let res = [];

  for (e of str){
    if(dic[e]){
      let a = res.pop()
      if (dic[e] !== a) return false
    }else{
      res.push(e)
    }
  }
  return res.length === 0
}

console.log(valid_parentheses("([]())"))