import React from "react";
import { createNode, type treeNode } from "./treeNode";

export const NodeStateContext = React.createContext<
  [treeNode, (newNode: treeNode) => void]
>([createNode("Root"), (_) => {}]);
