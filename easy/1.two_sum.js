// easiest way

const twoSum = (arr, target) =>{
  for(let i=0; i<arr.length-1; i++){
    for(let j=i+1; j<arr.length;j++){
      if(arr[i]+arr[j] === target){
        return [i,j]
      }
    }
  }
}

const betterTwoSum = (arr, target) => {
  let dic = {};
  for (let i = 0; i < arr.length; i++) {
    if(dic[target - arr[i]]!==undefined){
      return [dic[target - arr[i]], i];
    }else{
      dic[arr[i]] = i
    }
    
  }
}

console.log(betterTwoSum([ 2,2, 7, 15], 9));