import React from "react";
import { createNode, type Node } from "./treeNode";

export const NodeStateContext = React.createContext<[Node, (newNode: Node) => void]>([createNode("Root"), (_) => { }]);
