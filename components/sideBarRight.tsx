import { ScrollArea } from "radix-ui";
import { DenseTable } from "./tableComponent";
import SimpleLineChart, {
  ResourceBarChart,
  SurvivalLineChart,
} from "./lineChart";

const SideBarRight = () => (
  <ScrollArea.Root className="h-screen bg-white">
    <ScrollArea.Viewport className="size-full">
      <div className=""></div>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="horizontal">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar orientation="vertical">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
  </ScrollArea.Root>
);

export default SideBarRight;
