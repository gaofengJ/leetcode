import { TreeNode } from './helpers/TreeNode';

const buildTree = (inorder, postorder) => {
  const indexMap = new Map();
  const len = inorder.length;
  for (let i = 0; i < len; i++) {
    indexMap.set(inorder[i], i);
  }
  const innerBuildTree = (inLeft, inRight, postLeft, postRight) => {
    if (inLeft > inRight || postLeft > postRight) {
      return null;
    }
    // 后续遍历获取根节点位置
    const postRootIndex = postRight;
    // 中序遍历获取根节点位置
    const inRootIndex = indexMap.get(postorder[postRootIndex]);
    // 构建根节点
    const root = new TreeNode(postorder[postRootIndex]);
    // 获取左子树长度
    const subLeftLen = inRootIndex - inLeft;
    // 构建左子树
    root.left = innerBuildTree(inLeft, inRootIndex - 1, postLeft, postLeft + subLeftLen - 1);
    // 构建右子树
    root.right = innerBuildTree(inRootIndex + 1, inRight, postLeft + subLeftLen, postRootIndex - 1);
    return root;
  };
  return innerBuildTree(0, len - 1, 0, len - 1);
};
