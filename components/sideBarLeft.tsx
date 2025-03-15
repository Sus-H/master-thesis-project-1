import { ScrollArea } from "radix-ui";
import Slider from "components/slider";
import * as exampleData from "components/exampleData";
import { addChild, createNode, type Node } from "./treeNode";

function NodeComponent({ node }: { node: Node }) {

  if (node.children.length === 0) {
    return <li>{node.name}</li>;
  }

  return (
    <li>
      <details open={node.expanded}>
        <summary>{node.name}</summary>
        <ul>
          {node.children.map((child) => (
            <NodeComponent key={child.name} node={child} />
          ))}
        </ul>
      </details>
    </li>
  );
}

export default () => (
  <ScrollArea.Root className="h-screen w-[250px] overflow-hidden bg-white border">
    <ScrollArea.Viewport className="size-full rounded">
      <div className="px-5 py-[15px]">
        <div>Simulation Data</div>
        <div className="parameter-sliders grid gap-5">
          Parameters
          <Slider></Slider>
          <Slider></Slider>
          <Slider></Slider>
        </div>
        <div className="components-list-view">
          Scenario 1, Bilolycka
          <ul className="tree">
            <li>
              <details open>
                <summary>{exampleData.vehicle_1.model?.value}</summary>
                <ul>
                  <li>
                    <details open>
                      <summary>{exampleData.occupant_1.name}</summary>
                      <ul>
                        <li>Kön: {exampleData.occupant_1.sex?.value}</li>
                        <li>Ålder: {exampleData.occupant_1.age?.value}</li>
                        <li>Bälte: {exampleData.occupant_1.belt_use?.value}</li>
                        <li>Säte: {exampleData.occupant_1.seat_position?.value}</li>
                      </ul>
                    </details>
                  </li>
                    <NodeComponent node={addChild( createNode( "haha"), createNode("child"))} />
                  <li>
                    <details open>
                      <summary>{exampleData.occupant_3.name}</summary>
                      <ul>
                        <li>Uranus</li>
                        <li>Neptune</li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="components-list-view">
        </div>
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
