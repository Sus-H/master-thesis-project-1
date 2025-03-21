import { TopBar } from "components/topBar";
import SideBarLeft from "components/sideBarLeft";
import { ReactFlowProvider } from "@xyflow/react";
import MindMap from "components/mindMap";
import { createScenarioNode } from "components/createNode";
import { scenario_1 } from "components/exampleData";
import { NodeStateContext } from "components/nodeStateContext";
import { NavButton } from "components/nav-button";
import SideBarRight from "components/sideBarRight";
import type { TreeNode } from "components/treeNode";
import { useHistoryState } from "@uidotdev/usehooks";
import { AlgorithmBrowser } from "components/algorithmBrowser";

export default function Home() {
  const { state, set, undo, redo, clear, canUndo, canRedo } =
    useHistoryState(createScenarioNode(scenario_1));
  return (
    <div className="">
      <NodeStateContext.Provider
        value={[state, set, undo, redo, clear, canUndo, canRedo]}
      >
        <div className="shadow-md z-40 mb-0.5">
          <TopBar />
        </div>
        <div>
          <AlgorithmBrowser></AlgorithmBrowser>
        </div>
        <div className="flex">
          <div className="">
            <SideBarLeft></SideBarLeft>
          </div>
          <div className="h-screen w-screen">
            <ReactFlowProvider>
              <MindMap></MindMap>
            </ReactFlowProvider>
          </div>
          <div className="bg-white px-10 py-5">
            <NavButton to="/page_summary">
              <p className="text-2xl">Visa Detaljerad summering</p>
            </NavButton>
            <SideBarRight></SideBarRight>
          </div>
        </div>
      </NodeStateContext.Provider>
    </div>
  );
}
