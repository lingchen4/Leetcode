var copyRandomList = function(head) {
  if(!head) return null;
  
  let current = head;
  while(current) {
      const tmp = current.next;
      const cloned = new Node(current.val)
      
      current.next = cloned;
      cloned.next = tmp;
      
      current = tmp;
  }
  
  current = head;
  while(current) {
      const randomClone = current.random ? current.random.next : null;
      const clone = current.next;
      
      clone.random = randomClone;
      
      current = clone.next;
  }
  
  current = head;
  const headClone = head.next;
  while(current) {
      const clone = current.next;
      current.next = clone.next;
      
      current = current.next;
      
      clone.next = current ? current.next : null;
  }

  
  return headClone;
};