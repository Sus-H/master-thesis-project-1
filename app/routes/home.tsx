import { useState } from "react";
import { TopBar } from "components/topBar";
import Scroll_area from "components/sideBarLeft";
import { ReactFlowProvider } from "@xyflow/react";
import MindMap from "components/mindMap";
import { createScenarioNode } from "components/createNode";
import { scenario_1 } from "components/exampleData";
import { NodeStateContext } from "components/nodeStateContext";

export default function Home() {
  const [nodeTree, setNodeTree] = useState(createScenarioNode(scenario_1));


  return (
    <div className="">
      <NodeStateContext.Provider value={[nodeTree, setNodeTree]}>
        <div className="shadow-md z-40 mb-0.5">
          <TopBar />
        </div>
        <div className="flex">
          <div className="">
            <Scroll_area></Scroll_area>
          </div>
          <div className="h-screen w-screen">
            <ReactFlowProvider>
              <MindMap></MindMap>
            </ReactFlowProvider>
          </div>
          <div className="bg-white h-screen px-10 py-5">
            <p className="text-2xl">Visa summering</p>
            <div className="">
              <p>Summering här borta</p>
              <p>Involverade människor: 3 patienter</p>
              <p>Involverade Fordon: 1 Bil (Volvo XC60), krock</p>
              <p>Resursplan: 3 Ambulanser</p>
              <p>
                1 Ambulans: Patient (Främre passagerare) blödning,
                fraktur, stabil andning, Chans för överlevnad 40%
              </p>
              <p>
                1 Ambulans: Patient (förare), Chans för överlevnad 3%{" "}
              </p>
              <p>
                1 Ambulans: Patient, (Bakre passagerare)Chans för
                överlevnad 3%{" "}
              </p>
            </div>
          </div>
        </div>
      </NodeStateContext.Provider>
    </div>
  );
}
