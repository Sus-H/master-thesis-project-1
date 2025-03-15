import React, { useState } from 'react';

class Leaf {
  leaf: string;
  children: Leaf[];

  constructor(leaf: string) {
    this.leaf = leaf;
    this.children = [];
  }

  addChild(child: Leaf) {
    this.children.push(child);
  }
}

class TreeList {
  treeList: string;
  leaves: Leaf[];
  openLeaves: Set<string>;

  constructor(treeList: string) {
    this.treeList = treeList;
    this.leaves = [];
    this.openLeaves = new Set();
  }

  addLeaf(leaf: Leaf, parentLeaf?: Leaf) {
    if (parentLeaf) {
      parentLeaf.addChild(leaf);
    } else {
      this.leaves.push(leaf);
    }
  }

  toggleOpen(leaf: Leaf) {
    if (this.openLeaves.has(leaf.leaf)) {
      this.openLeaves.delete(leaf.leaf);
    } else {
      this.openLeaves.add(leaf.leaf);
    }
  }

  renderLeaf(leaf: Leaf, onToggle: (leaf: Leaf) => void) {
    const isOpen = this.openLeaves.has(leaf.leaf);
    if (leaf.children.length > 0) {
      return (
        <li key={leaf.leaf}>
          <details open={isOpen}>
            <summary onClick={() => onToggle(leaf)}>{leaf.leaf}</summary>
            <ul>
              {leaf.children.map((child) => this.renderLeaf(child, onToggle))}
            </ul>
          </details>
        </li>
      );
    } else {
      return (
        <li key={leaf.leaf}>
          {leaf.leaf}
        </li>
      );
    }
  }
}

// Instantiate TreeList and add example data
const treeList = new TreeList("Giant planets");
const gasGiants = new Leaf("Gas giants");
gasGiants.addChild(new Leaf("Jupiter"));
gasGiants.addChild(new Leaf("Saturn"));

const iceGiants = new Leaf("Ice giants");
iceGiants.addChild(new Leaf("Uranus"));
iceGiants.addChild(new Leaf("Neptune"));

treeList.addLeaf(gasGiants);
treeList.addLeaf(iceGiants);

// Render the TreeList
const TreeListComponent = () => {
  const [tree, setTree] = useState(treeList);

  const handleToggle = (leaf: Leaf) => {
    tree.toggleOpen(leaf);
    setTree({ ...tree });
  };

  return (
    <div>
      <h1>{tree.treeList}</h1>
      <ul className="tree">
        {tree.leaves.map((leaf) => (
          <TreeListRenderLeaf key={leaf.leaf} leaf={leaf} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
};

const TreeListRenderLeaf = ({ leaf, onToggle }) => {
  const tree = useState(treeList)[0];
  const isOpen = tree.openLeaves.has(leaf.leaf);

  if (leaf.children.length > 0) {
    return (
      <li key={leaf.leaf}>
        <details open={isOpen}>
          <summary onClick={() => onToggle(leaf)}>{leaf.leaf}</summary>
          <ul>
            {leaf.children.map((child) => (
              <TreeListRenderLeaf key={child.leaf} leaf={child} onToggle={onToggle} />
            ))}
          </ul>
        </details>
      </li>
    );
  } else {
    return (
      <li key={leaf.leaf}>
        {leaf.leaf}
      </li>
    );
  }
};

export default TreeListComponent;