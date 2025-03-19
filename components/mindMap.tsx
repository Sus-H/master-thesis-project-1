import React, { useCallback, useContext } from "react";
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { NodeStateContext } from "./nodeStateContext";
import { type TreeNode } from "./treeNode";

function createMindMapNodes(
  node: TreeNode,
  x: number = 0,
  y: number = 0,
): any {
  if (node.children.length === 0) {
    return [];
  }
  const nodeList = [
    {
      id: `horizontal-${node.content}`,
      type: "Scenario 1",
      data: { label: node.content },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      position: { x, y },
      draggable: true,
    },
  ];

  const nodeChildren = node.children.flatMap((child) =>
    createMindMapNodes(child, x + 160, y)
  );

  return nodeList.concat(nodeChildren);
}

function createMindMapEdges(node: TreeNode): any {
  return node.children.flatMap((child) => {
    const childEdges = createMindMapEdges(child);
    const childEdge = {
      id: `horizontal-e${node.content}-${child.content}`,
      source: `horizontal-${node.content}`,
      target: `horizontal-${child.content}`,
      animated: true,
    };
    return [...childEdges, childEdge];
  });
}


const MindMap = () => {
  const [nodeTree, __] = useContext(NodeStateContext);
  const mindMapNodes = createMindMapNodes(nodeTree);
  const mindMapEdges = createMindMapEdges(nodeTree);

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
