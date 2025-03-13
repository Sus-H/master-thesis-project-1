import { NavBar } from "components/nav-bar";
import { NavButton } from "components/nav-button";
import Slider from "components/slider";
import Checkbox from "components/checkbox";
import Scroll_area from "components/scroll_area";
import SimpleLineChart from "components/lineChart";
import Flow from "components/flow";
import TabComponent from "components/tabComponent";
import DnDFlow from "components/dndFlow";
import { DnDProvider} from 'components/dndContext';
import { ReactFlowProvider } from "@xyflow/react";
import { TreeList } from "components/treeList";

export default function Home() {
  return <div>
    hello, welcome home
    <NavBar/>
    <div> 
      <Slider></Slider>
      <Checkbox></Checkbox>
      <Scroll_area></Scroll_area>
      <SimpleLineChart></SimpleLineChart>
    </div>
    <div>
      <TreeList></TreeList>
    </div>
    <div className="h-full w-full">
      <ReactFlowProvider>
        <DnDProvider>
          <DnDFlow />
        </DnDProvider>
      </ReactFlowProvider>
    </div>
    <div>
     <TabComponent></TabComponent>
    </div>

  </div>;
}
