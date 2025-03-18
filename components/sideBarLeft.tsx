import { ScrollArea } from "radix-ui";
import { SliderComponent } from "components/slider";
import { createNode, type TreeNode } from "./treeNode";
import DropdownMenuParameters from "./dropdownMenuParameters";
import SelectComponent from "./selectComponent";
import SwitchButton from "./switchButton";
import { useContext } from "react";
import { NodeStateContext } from "./nodeStateContext";
import { useState } from "react";

function NodeComponent({ node }: { node: TreeNode }) {
  if (node.children.length === 0) {
    return <li>{node.content}</li>;
  }

  return (
    <li>
      <details open={node.expanded}>
        <summary>{node.content}</summary>
        <ul>
          {node.children.map((child) => (
            <NodeComponent
              key={child.content}
              node={child}
            />
          ))}
        </ul>
      </details>
    </li>
  );
}

function TreeComponent() {
  const [nodeTree, _] = useContext(NodeStateContext) ?? [
    createNode("Root"),
    (_) => {},
  ];
  return (
    <ul className="tree">
      <NodeComponent node={nodeTree} />
    </ul>
  );
}

export default function SideBarLeft() {
  const [checkedStates, setCheckedStates] = useState<{
    [key: string]: boolean;
  }>({
    "Delta-V": false,
    "Uppmätt hastighet": false,
    Accelorometer: false,
    Fordonsdetaljer: false,
    "Transport till trauma center": false,
    "Transportsträcka till trauma center": false,
    Hastighetsgräns: false,
    Position: false,
    Väder: false,
    Tid: false,
    Medelålder: false,
    Kön: false,
    Säkerhetsbälte: false,
    "Position i bil": false,
  });

  return (
    <ScrollArea.Root className="h-screen w-[300px] bg-white">
      <ScrollArea.Viewport className="size-full rounded">
        <div className="grid grid-cols-1 gap-5 px-5 py-5">
          <div>Simulation Data</div>
          <div className="h-full w-full">
            <SelectComponent></SelectComponent>
          </div>
          <div>
            <SwitchButton></SwitchButton>
          </div>
          <button className="hover:underline">
            <DropdownMenuParameters
              checkedStates={checkedStates}
              setCheckedStates={setCheckedStates}
            />
          </button>
          <div className="grid gap-5">
            <div className="">
              {Object.entries(checkedStates).map(([name, _]) => (
                <SliderComponent
                  name={name}
                  checkedStates={checkedStates}
                ></SliderComponent>
              ))}
            </div>
          </div>
          <div className="">
            Scenario
            <TreeComponent />
          </div>
          <div className="components-list-view"></div>
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex touch-none select-none bg-blackA3 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-mauve10 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="flex touch-none select-none bg-blackA3 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-mauve10 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-[44px] before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="bg-blackA5" />
    </ScrollArea.Root>
  );
}
