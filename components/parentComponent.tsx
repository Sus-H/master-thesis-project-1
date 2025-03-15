import React, { useState } from "react";
import DropdownMenuComponents from "./dropdownMenuComponent";
import TreeListComponent, { treeList, Leaf } from "./treeList";

const ParentComponent = () => {
  const [tree, setTree] = useState(treeList);

  const handleAddLeaf = (item: string) => {
    const newLeaf = new Leaf(item);
    tree.addLeaf(newLeaf);
    setTree({ ...tree });
  };

  return (
    <div>
      <DropdownMenuComponents onAddLeaf={handleAddLeaf} />
      <TreeListComponent tree={tree} />
    </div>
  );
};

export default ParentComponent;