const numIslands = grid => {
  let counter = 0;
  for (let row in grid){
    for (let col in grid[row]){
      if(grid[row][col] === '1'){
        counter++;
        helper(parseInt(row), parseInt(col) , grid);
      }
    }
  }
  return counter
}

const helper = (row, col, grid) => {
  if(grid[row]=== undefined || grid[row][col]===undefined || grid[row][col]==="0") return;
  grid[row][col] = '0';
  let directions = [[1,0], [-1,0], [0,1], [0, -1]];
  for (let direction of directions ){
    helper(row + direction[0], col + direction[1], grid)
  }
}

console.log(numIslands([
["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]
]))