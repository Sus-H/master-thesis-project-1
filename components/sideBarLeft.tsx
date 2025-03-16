import { ScrollArea } from "radix-ui";
import {SliderComponent} from "components/slider";
import * as exampleData from "components/exampleData";
import { addChild, createNode, type Node } from "./treeNode";
import type { Patient, Scenario, Simulation, Vehicle } from "./model";

function NodeComponent({ node }: { node: Node }) {

  if (node.children.length === 0) {
    return <li>{node.content}</li>;
  }

  return (
    <li>
      <details open={node.expanded}>
        <summary>{node.content}</summary>
        <ul>
          {node.children.map((child) => (
            <NodeComponent key={child.content} node={child} />
          ))}
        </ul>
      </details>
    </li>
  );
}

function createScenarioNode(scenario: Scenario){
  let parentNode = createNode("Scenario")
  let children = Object.entries(scenario).map(([key, value]) => createNode(value))
  children.forEach((child) => addChild(parentNode, child))
  return <NodeComponent node={parentNode} />
}

function createPatientNode(patient: Patient){
  let parentNode = createNode("Patient")
  let children = Object.entries(patient).map(([key, value]) => createNode(value))
  children.forEach((child) => addChild(parentNode, child))
  return <NodeComponent node={parentNode} />
}

function createVehicleNode(vehicle: Vehicle){
  let parentNode = createNode("Vehicle")
  let children = Object.entries(vehicle).map(([key, value]) => createNode(value))
  children.forEach((child) => addChild(parentNode, child))
  return <NodeComponent node={parentNode} />
}



function TreeComponent(data: Simulation){
  let scenarios = data.scenarios
  let patients = data.persons
  let vehicles = data.vehicles

  return(
    <ul className="tree">
      <NodeComponent node={addChild( createNode("Parent"), createNode("child"))} />
    </ul>
  )
}

export default (data: Simulation) => (
  <ScrollArea.Root className="h-screen w-[250px] overflow-hidden bg-white border">
    <ScrollArea.Viewport className="size-full rounded">
      <div className="px-5 py-[15px]">
        <div>Simulation Data</div>
        <div className="parameter-sliders grid gap-5">
          Parameters
          <div>
            <SliderComponent name="param"/>
          </div>
        </div>
        <div className="components-list-view">
          Scenario 1, Bilolycka
          <TreeComponent scenarios={}> </TreeComponent>

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
