var reverseList = function(head) {
  var prev = null
  var curr = head;
  while (head !== null) {
      curr = head.next;
      head.next = prev;
      prev = head;
      head = curr;
  }
  
  return prev;
};