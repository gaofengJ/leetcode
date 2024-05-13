const copyRandomList = (head, cachedNode = new Map()) => {
  if (head === null) return null;
  if (!cachedNode.has(head)) {
    // eslint-disable-next-line no-unused-expressions
    cachedNode.set(head, { val: head.val });
    Object.assign(
      cachedNode.get(head),
      {
        next: copyRandomList(head.next, cachedNode),
        random: copyRandomList(head.random, cachedNode),
      },
    );
  }
  return cachedNode.get(head);
};
