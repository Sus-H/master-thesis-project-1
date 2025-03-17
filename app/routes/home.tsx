import React from "react";
import { TopBar } from "components/topBar";
import Scroll_area from "components/sideBarLeft";
import { ReactFlowProvider } from "@xyflow/react";
import MindMap from "components/mindMap";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <TopBar />
      <div className="flex">
        <div className="">
          <Scroll_area></Scroll_area>
        </div>
        <div className="components-mind-map-view">
          <div className="h-screen w-screen">
            <ReactFlowProvider>
              <MindMap></MindMap>
            </ReactFlowProvider>
          </div>
        </div>
        {/* <div className="summary w-[400px] absolute right-0 z-10 bg-white h-screen px-10 py-5">
          <p className="text-2xl">Visa summering</p>
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
        </div> */}
      </div>
    </div>
  );
}
