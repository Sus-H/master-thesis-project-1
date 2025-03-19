import React from "react";
import { createNode, type TreeNode } from "./treeNode";

export const NodeStateContext = React.createContext<
  [TreeNode, (newNode: TreeNode) => void]
>([createNode("Root"), (_) => { }]);
