import React from "react";
import { createNode, type TreeNode } from "./treeNode";

export const NodeStateContext = React.createContext<
  [TreeNode, (newNode: TreeNode) => void, () => void, () => void, () => void, boolean, boolean]
>([createNode("Root"), (_) => { }, () => { }, () => { }, () => { }, false, false]);
