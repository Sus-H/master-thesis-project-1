import React, { useState } from 'react';

export const addElementToTreeList = (setTreeList, element) => {
  setTreeList((prevList) => [...prevList, element]);
};

const TreeList = () => {
  const [treeList, setTreeList] = useState([]);

  return (
    <div>
      <ul>
        {treeList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TreeList;