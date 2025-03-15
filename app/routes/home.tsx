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
        <div className="z-4">
          <Scroll_area></Scroll_area>
        </div>
        <div className="components-mind-map-view z-0">
          <div className="h-screen w-screen">
            <ReactFlowProvider>
              <MindMap></MindMap>
            </ReactFlowProvider>
          </div>
        </div>
        <div className="summary absolute right-0 z-10 bg-white h-screen">
          Summering här borta
          {/* <SimpleLineChart></SimpleLineChart> */}
        </div>
      </div>
    </div>
  );
}
