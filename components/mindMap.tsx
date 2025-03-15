import React, { useCallback } from 'react';
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { initialNodes } from './nodes';
import { initialEdges } from './edges';

 
const MindMap = () => {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: any) => setEdges((els) => addEdge(params, els)),
    [],
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
        <Controls position='top-left'/>
        <MiniMap position='bottom-left' pannable/>
      </ReactFlow>  
  );
};
 
export default MindMap;