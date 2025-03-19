import { useCallback, useContext } from "react";
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Position,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { NodeStateContext } from "./nodeStateContext";
import { type TreeNode } from "./treeNode";
import { type Node } from '@xyflow/react';


function hasChild(node: TreeNode): boolean {
  return node.children.length !== 0;
}


function createMindMapNodes(
  node: TreeNode,
  x: number = 0,
  y: number = 0,
  id: string = "0"
): Node[] {
  if (node.children.length === 0) {
    return [];
  }
  const nodeList: Node[] = [
    {
      id: id,
      data: { label: node.content },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      position: { x, y },
      draggable: true,
    },
  ];

  const children = node.children.filter(hasChild);

  const childOffset = (children.length - 1) * 40;

  const nodeChildren = children.flatMap((child, i) => {
    return createMindMapNodes(child, x + 160, y - childOffset + i * 80, `${id}-${i}`);
  });

  return nodeList.concat(nodeChildren);
}

function createMindMapEdges(nodes: Node[]): Edge[] {
  const edges: Edge[] = [];
  nodes.forEach((node) => {
    if (node.id.includes('-')) {
      const parentId = node.id.substring(0, node.id.lastIndexOf('-'));
      edges.push({
        id: `${parentId}-${node.id}`,
        source: parentId,
        target: node.id,
        animated: true,
      });
    }
  });
  return edges;
}


const MindMap = () => {
  const [nodeTree, __] = useContext(NodeStateContext);
  const mindMapNodes = createMindMapNodes(nodeTree);
  const mindMapEdges = createMindMapEdges(mindMapNodes);

  const [nodes, _, onNodesChange] = useNodesState(mindMapNodes);
  const [edges, setEdges, onEdgesChange] =
    useEdgesState(mindMapEdges);
  const onConnect = useCallback(
    (params: any) => setEdges((els) => addEdge(params, els)),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="bottom-left"
      style={{ backgroundColor: "#F7F9FB" }}
    // snapToGrid={true}
    // snapGrid={[20, 20]}
    >
      <Background />
      <Controls position="top-left" />
      <MiniMap
        position="bottom-left"
        pannable
      />
    </ReactFlow>
  );
};

export default MindMap;
