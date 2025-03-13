import React, { useCallback, useRef, useState } from 'react';
import {
  Background,
  MiniMap,
  Controls,
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  Panel,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

// Add Node on Edge Drop
let id = 1;
const getId = () => `${id++}`;
const nodeOrigin = [0.5, 0];
 
// Save and Restore
const flowKey = 'example-flow';
 
const getNodeId = () => `randomnode_${+new Date()}`;

const initialNodes = [
  {
    id: 'horizontal-1',
    sourcePosition: 'right',
    type: 'input',
    data: { label: 'Input' },
    position: { x: 0, y: 80 },
  },
  {
    id: 'horizontal-2',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'A Node' },
    position: { x: 250, y: 0 },
  },
  {
    id: 'horizontal-3',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Node 3' },
    position: { x: 250, y: 160 },
  },
  {
    id: 'horizontal-4',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Node 4' },
    position: { x: 500, y: 0 },
  },
  {
    id: 'horizontal-5',
    sourcePosition: 'top',
    targetPosition: 'bottom',
    data: { label: 'Node 5' },
    position: { x: 500, y: 100 },
  },
  {
    id: 'horizontal-6',
    sourcePosition: 'bottom',
    targetPosition: 'top',
    data: { label: 'Node 6' },
    position: { x: 500, y: 230 },
  },
  {
    id: 'horizontal-7',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Node 7' },
    position: { x: 750, y: 50 },
  },
  {
    id: 'horizontal-8',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Node 8' },
    position: { x: 750, y: 300 },
  },
];
 
const initialEdges = [
  {
    id: 'horizontal-e1-2',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-2',
    animated: true,
  },
  {
    id: 'horizontal-e1-3',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-3',
    animated: true,
  },
  {
    id: 'horizontal-e1-4',
    source: 'horizontal-2',
    type: 'smoothstep',
    target: 'horizontal-4',
    label: 'edge label',
  },
  {
    id: 'horizontal-e3-5',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-5',
    animated: true,
  },
  {
    id: 'horizontal-e3-6',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-6',
    animated: true,
  },
  {
    id: 'horizontal-e5-7',
    source: 'horizontal-5',
    type: 'smoothstep',
    target: 'horizontal-7',
    animated: true,
  },
  {
    id: 'horizontal-e6-8',
    source: 'horizontal-6',
    type: 'smoothstep',
    target: 'horizontal-8',
    animated: true,
  },
];
 
const HorizontalFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const { setViewport } = useReactFlow();

  

//   Save and Restore
  const [rfInstance, setRfInstance] = useState(null);
  
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [],
  );

  const onConnectEnd = useCallback(
      (event, connectionState) => {
        // when a connection is dropped on the pane it's not valid
        if (!connectionState.isValid) {
          // we need to remove the wrapper bounds, in order to get the correct position
          const id = getId();
          const { clientX, clientY } =
            'changedTouches' in event ? event.changedTouches[0] : event;
          const newNode = {
            id,
            position: screenToFlowPosition({
              x: clientX,
              y: clientY,
            }),
            data: { label: `Node ${id}` },
            origin: [0.5, 0.0],
          };
   
          setNodes((nds) => nds.concat(newNode));
          setEdges((eds) =>
            eds.concat({ id, source: connectionState.fromNode.id, target: id }),
          );
        }
      },
      [screenToFlowPosition],
    );

      const onSave = useCallback(() => {
        if (rfInstance) {
          const flow = rfInstance.toObject();
          localStorage.setItem(flowKey, JSON.stringify(flow));
        }
      }, [rfInstance]);
     
      const onRestore = useCallback(() => {
        const restoreFlow = async () => {
          const flow = JSON.parse(localStorage.getItem(flowKey));
     
          if (flow) {
            const { x = 0, y = 0, zoom = 1 } = flow.viewport;
            setNodes(flow.nodes || []);
            setEdges(flow.edges || []);
            setViewport({ x, y, zoom });
          }
        };
     
        restoreFlow();
      }, [setNodes, setViewport]);
     
      const onAdd = useCallback(() => {
        const newNode = {
          id: getNodeId(),
          data: { label: 'Added node' },
          position: {
            sourcePosition: 'right',
            targetPosition: 'left',
            x: (Math.random() - 0.5) * 400,
            y: (Math.random() - 0.5) * 400,
          },
        };
        setNodes((nds) => nds.concat(newNode));
      }, [setNodes]);
 
  return (
    <ReactFlow className="wrapper" ref={reactFlowWrapper}
      nodes={nodes}
      edges={edges}
      onInit={setRfInstance}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="bottom-left"
      style={{ backgroundColor: "#F7F9FB" }}
      onConnectEnd={onConnectEnd}
      fitViewOptions={{ padding: 2 }}
      nodeOrigin={nodeOrigin}
      >
        <Background />
        <MiniMap/>
        <Controls/>
          <Panel position="top-right">
            <button className="border" onClick={onSave}>save</button>
            <button className="border" onClick={onRestore}>restore</button>
            <button className="border" onClick={onAdd}>add node</button>
          </Panel>
      </ReactFlow>  
  );
};
 
export default HorizontalFlow;