import { ScrollArea } from "radix-ui";
import { SliderComponent } from "components/slider";
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



function createBasicNode(data: any, parentNodeName: string) {
  const unpackedData: string[] = [
    "model", "name", "pedestrians", "vehicles", "vehicle_occupants", "accident_type",
  ];
  return Object.entries(data).filter(([key, value]) => !unpackedData.includes(key))
    .map(([key, value]) => createNode(`${key}: ${value.value}`))
    .reduce((parent, child) => addChild(parent, child), createNode(parentNodeName));
}

function createScenarioNode(scenario: Scenario) {
  const scenarioNodeName = scenario.accident_type?.value || "Scenario";
  const scenarioNode = createBasicNode(scenario, scenarioNodeName);
  const vehicleNodes = scenario.vehicles?.value || [];
  const vehicleNode = vehicleNodes.map((vehicle) => createVehicleNode(vehicle));
  return createBasicNode(scenario, scenarioNodeName);
}

function createPatientNode(patient: Patient) {
  const patientNodeName: string = patient.name || "Patient";
  return createBasicNode(patient, patientNodeName);
}

function createVehicleNode(vehicle: Vehicle) {
  const vehicleNodeName: string = vehicle.model?.value || "Vehicle";
  return createBasicNode(vehicle, vehicleNodeName)
};

function TreeComponent({ data }: { data: Simulation }) {
  let scenarios = data.scenarios;
  let patients = data.persons;
  let vehicles = data.vehicles;

  return (
    <ul className="tree">
      {scenarios &&
        scenarios.map((scenario) => <NodeComponent node={createScenarioNode(scenario)} />)}
      {patients &&
        patients.map((patient) => <NodeComponent node={createPatientNode(patient)} />)}
      {vehicles &&
        vehicles.map((vehicle) => <NodeComponent node={createVehicleNode(vehicle)} />)}
    </ul>
  );
}

export default (data: Simulation) => (
  <ScrollArea.Root className="h-screen w-[250px] overflow-hidden bg-white border">
    <ScrollArea.Viewport className="size-full rounded">
      <div className="px-5 py-[15px]">
        <div>Simulation Data</div>
        <div className="parameter-sliders grid gap-5">
          Parameters
          <div>
            <SliderComponent name="param" />
          </div>
        </div>
        <div className="components-list-view">
          Scenario 1, Bilolycka
          <TreeComponent
            data={{ scenarios: [exampleData.scenario_1], persons: [exampleData.occupant_2], vehicles: [exampleData.vehicle_1] }}
          />
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
