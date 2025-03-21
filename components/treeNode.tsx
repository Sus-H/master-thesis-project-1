export interface TreeNode {
  content: string;
  children: TreeNode[];
  expanded: boolean;
  nodeType: string;
}

export function createNode(content: string, nodeType: string = "string"): TreeNode {
  return {
    content,
    children: [],
    expanded: true,
    nodeType,
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
