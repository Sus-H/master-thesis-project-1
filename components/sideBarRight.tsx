import { ScrollArea } from "radix-ui";
import { DenseTable } from "./tableComponent";
import SimpleLineChart from "./lineChart";

const SideBarRight = () => (
  <ScrollArea.Root className="h-screen w-[300px] bg-white">
    <ScrollArea.Viewport className="size-full rounded">
      <div>
        <DenseTable></DenseTable>
      </div>
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
