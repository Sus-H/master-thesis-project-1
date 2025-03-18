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
import { initialNodes } from "./nodes";
import { initialEdges } from "./edges";
import { NodeStateContext } from "./nodeStateContext";
import { addChild, createNode, type TreeNode } from "./treeNode";

function createMindMapNodes(
  node: TreeNode,
  x: number = 0,
  y: number = 0
) {
  const nodeList = [
    {
      id: `horizontal-${node.content}`,
      type: "Scenario 1",
      data: { label: node.content },
      position: { x, y },
      draggable: true,
    },
  ];

  const nodeChildren = node.children.flatMap((child) =>
    createMindMapNodes(child, x + 80, y + 80)
  );

  return nodeList.concat(nodeChildren);
}

function createMindMapEdges(node: TreeNode) {
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

const test1: TreeNode = createNode("TestNode1");
const test2: TreeNode = createNode("TestNode2");

const MindMap = () => {
  const [nodeTree, setNodeTree] = useContext(NodeStateContext);
  const displayedNode = nodeTree;
  const mindMapNodes = createMindMapNodes(displayedNode);
  const mindMapEdges = createMindMapEdges(displayedNode);

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
