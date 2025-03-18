export interface TreeNode {
  content: string;
  children: TreeNode[];
  expanded: boolean;
}

export function createNode(content: string): TreeNode {
  return {
    content,
    children: [],
    expanded: true,
  };
}

export function addChild(
  parent: TreeNode,
  child: TreeNode
): TreeNode {
  return {
    ...parent,
    children: [...parent.children, child],
  };
}

export function toggleExpanded(node: TreeNode): TreeNode {
  return {
    ...node,
    expanded: !node.expanded,
  };
}
