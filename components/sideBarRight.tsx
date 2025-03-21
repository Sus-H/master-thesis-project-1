import { ScrollArea } from "radix-ui";
import SimpleLineChart, {
  ResourceBarChart,
  SurvivalLineChart,
} from "./lineChart";
import { DenseTableComponent } from "./tableComponent";

const SideBarRight = () => (
  <ScrollArea.Root className="h-screen w-[300px] bg-white">
    <ScrollArea.Viewport className="">
      <DenseTableComponent></DenseTableComponent>
      <SurvivalLineChart></SurvivalLineChart>
      <ResourceBarChart></ResourceBarChart>
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
