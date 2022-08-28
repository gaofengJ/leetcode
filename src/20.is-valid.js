/**
 * @description 有效的括号
 * @field 栈
 * @description 时间复杂度：O(n)，其中n是字符串的长度
 * @description 空间复杂度：O(n + ∣Σ∣)。栈中的字符数量为 O(n)，而哈希表使用的空间为 O(∣Σ∣)，相加即可得到总空间复杂度。
 * @param {string} s
 * @returns boolean
 */
const isValid = (s) => {
  const len = s.length;
  if (len % 2) return false;
  const parenthesesMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [];
  for (let i = 0; i < len; i++) {
    if (['(', '{', '['].includes(s[i])) {
      stack.push(s[i]);
    }
    if ([')', '}', ']'].includes(s[i])) {
      const tempStr = stack.pop();
      if (parenthesesMap[tempStr] !== s[i]) return false;
    }
  }
  return !stack.length;
};
