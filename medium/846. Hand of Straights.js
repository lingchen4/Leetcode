const isNStraightHand = (hand, W) => {
  if (hand.length % W) return false;

  let map = hand.reduce(
    (map, curr) => map.set(curr, map.get(curr)+1 || 1),
    new Map()
  );

  const isValid = (key) => {
    let count = map.get(key);
    while (count) {
      for (let i = key; i < key + W; i++) {
        if (map.get(i) === 0 || !map.get(i)) return false;
        else map.set(i, map.get(i) - 1);
        console.log(i, map.get(i))
      }
      count--;
    }
    return true
  };

  return [...map.keys()].sort((a,b)=> a-b).every((k)=> isValid(k))
};


console.log(isNStraightHand([8,10,12], 3))