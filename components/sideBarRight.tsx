import { ScrollArea } from "radix-ui";
import SimpleLineChart, {
  ResourceBarChart,
  SurvivalLineChart,
} from "./lineChart";
import { DenseTableComponent } from "./tableComponent";
import { NavButton } from "./nav-button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const SideBarRight = () => (
  <ScrollArea.Root className="h-screen w-[400px] bg-white">
    <ScrollArea.Viewport className="size-full rounded">
      <NavButton to="/page_summary">
        <p className="">Visa Detaljerad summering <ArrowRightIcon className="inline"></ArrowRightIcon> </p>
      </NavButton>
      <DenseTableComponent></DenseTableComponent>
      <div className="grid gap-5">
        <SurvivalLineChart></SurvivalLineChart>
        <ResourceBarChart></ResourceBarChart>
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
