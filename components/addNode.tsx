import React, { useCallback, useState } from 'react';
import HorizontalFlow from './horizontalFlow';
import DropdownMenuComponents from './dropdownMenuComponent';

const AddNode = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const getNodeId = () => `randomnode_${+new Date()}`;

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
    <div>
      <DropdownMenuComponents onAdd={onAdd} />
      <HorizontalFlow nodes={nodes} setNodes={setNodes} edges={edges} setEdges={setEdges} />
    </div>
  );
};

export default AddNode;