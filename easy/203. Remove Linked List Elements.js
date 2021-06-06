const removeElements = (head, val) => {
  if (!head) return head;
  while (head && head.val === val) {
    head = head.next;
  }

  let curr = head;
  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};
