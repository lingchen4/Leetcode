const coinChange = (coins, amount) => {
  const dp = Array(amount+1).fill(amount+1)
  dp[0] = 0;
  for (let coin of coins){
    for(let i = coin; i<=amount; i++){
      dp[i] = Math.min(dp[i], dp[i-coin]+1)
    }
  }

  return dp[amount] === amount+1 ? -1 : dp[amount]
}