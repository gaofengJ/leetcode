import { TreeNode } from './helpers/TreeNode';

const buildTree = (preorder, inorder) => {
  const indexMap = new Map();
  const len = preorder.length;
  for (let i = 0; i < len; i++) {
    indexMap.set(inorder[i], i);
  }
  const innerBuildTree = (preLeft, preRight, inLeft, inRight) => {
    if (preLeft > preRight) {
      return null;
    }
    // 在先序遍历中定位根节点位置，第一个就是
    const preRootIndex = preLeft;
    // 在中序遍历中定位根节点位置
    const inRootIndex = indexMap.get(preorder[preRootIndex]);
    // 创建根节点
    const root = new TreeNode(preorder[preRootIndex]);
    // 得到左子树中节点个数
    const subLeftLen = inRootIndex - inLeft;
    // 递归构造左子树，连接到根节点
    // 先序遍历中 [左边界+1, subLeftLen]
    root.left = innerBuildTree(preLeft + 1, preLeft + subLeftLen, inLeft, inRootIndex - 1);
    // 递归构造右子树，连接到根节点
    // 先序遍历中 [subLeftLen + subLeftLen + 1, 右边界]
    root.right = innerBuildTree(preLeft + subLeftLen + 1, preRight, inRootIndex + 1, inRight);
    return root;
  };
  return innerBuildTree(0, len - 1, 0, len - 1);
};
