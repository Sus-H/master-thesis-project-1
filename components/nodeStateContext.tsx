import React from "react";
import type { Node } from "./treeNode";

export const NodeStateContext = React.createContext<[Node, (newNode: Node) => void] | undefined>(undefined);
