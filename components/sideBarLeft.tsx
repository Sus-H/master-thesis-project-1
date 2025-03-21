import { ScrollArea, Separator } from "radix-ui";
import { SliderComponent } from "components/slider";
import { createNode, type TreeNode } from "./treeNode";
import DropdownMenuParameters from "./dropdownMenuParameters";
import SelectComponent from "./selectComponent";
import SwitchButton from "./switchButton";
import { useContext } from "react";
import { NodeStateContext } from "./nodeStateContext";
import { useState } from "react";
import { createScenarioNode } from "./createNode";
import { scenario_1 } from "./exampleData";
import { SelectSeparator } from "@radix-ui/react-select";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

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
  const [nodeTree, ..._] = useContext(NodeStateContext) ?? [
    createNode("Root"),
    (_) => { },
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

  const [, setNode, undoNode, redoNode, ..._] = useContext(NodeStateContext);

  return (
    <ScrollArea.Root className="h-screen w-[300px] bg-white">
      <ScrollArea.Viewport className="size-full rounded">
        <div className="grid grid-cols-1 gap-2 px-5 py-3">
          <div className="grid grid-cols-3 ">
          <button
            className="border hover:underline active:bg-amber-700"
            onClick={undoNode}
          >
            Ångra
          </button>
          <button
            className="border hover:underline active:bg-amber-700"
            onClick={redoNode}
          >
            Gör om
          </button>
          <button
            className="border hover:underline active:bg-amber-700"
            onClick={() => {
              setNode(createScenarioNode(scenario_1));
            }}
          >
            Återställ
          </button>
          </div>
          <h5>Simuleringsparametrar</h5>
          <button className="hover:underline flex">
            <DropdownMenuParameters
              checkedStates={checkedStates}
              setCheckedStates={setCheckedStates}
            />
          </button>
            <SelectComponent></SelectComponent>
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
            <SwitchButton></SwitchButton>
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
