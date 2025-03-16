export interface Node {
  content: string;
  children: Node[];
  expanded: boolean;
}

export function createNode(content: string): Node {
  return {
    content,
    children: [],
    expanded: false,
  };
}

export function addChild(parent: Node, child: Node): Node {
  return {
    ...parent,
    children: [...parent.children, child],
  }
}

export function toggleExpanded(node: Node): Node {
  return {
    ...node,
    expanded: !node.expanded,
  };
}