let maxProfit = (prices) =>{
  let profit = 0;
  let min = prices[0];
  for(let i=1; i<prices.length; i++){
    if(prices[i]>prices[i-1]){
      profit = Math.max(prices[i]-min, profit)
    }else{
      min = Math.min(prices[i], min)
    }
  }

  return profit
}