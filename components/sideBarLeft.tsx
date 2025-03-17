import { ScrollArea } from "radix-ui";
import { SliderComponent } from "components/slider";
import * as exampleData from "components/exampleData";
import { addChild, createNode, type Node } from "./treeNode";
import type { Patient, Scenario, Simulation, Vehicle } from "./model";
import DropdownMenuParameters from "./dropdownMenuParameters";
import ToggleGroupButton from "./toggleButton";
import SelectComponent from "./selectComponent";
import { translate } from "./languageMap";

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

// Process k:v data to strings to display visually
function createBasicNode(data: any, parentNodeName: string) {
  const unpackedData: string[] = [
    "model",
    "name",
    "pedestrians",
    "vehicles",
    "vehicle_occupants",
    "accident_type",
    "impact_forces_g",
  ];
  return Object.entries(data)
    .filter(([key, value]) => !unpackedData.includes(key))
    .map(([key, value]) =>
      createNode(`${translate(key)}: ${value.value}`)
    )
    .reduce(
      addChild,
      createNode(parentNodeName)
    );
}

function createScenarioNode(scenario: Scenario) {
  const scenarioNodeName: string =
    scenario.accident_type?.value || "Scenario";
  const scenarioNode: Node = createBasicNode(
    scenario,
    scenarioNodeName
  );

  const vehicles: Vehicle[] = scenario.vehicles?.value || [];
  const vehicleNodes: Node[] = vehicles.map(
    createVehicleNode
  );
  const scenarioNodeWithVehicles = vehicleNodes.reduce(
    addChild,
    scenarioNode,
  );

  const patients: Patient[] =
    scenario.pedestrians?.map((patient) => patient.value) || [];
  const patientNodes: Node[] = patients.map(
    createPatientNode
  );
  const scenarioNodeWithChildren = patientNodes.reduce(
    addChild,
    scenarioNodeWithVehicles
  );

  return scenarioNodeWithChildren;
}

function createPatientNode(patient: Patient) {
  const patientNodeName: string = patient.name || "Patient";
  return createBasicNode(patient, patientNodeName);
}

function createVehicleNode(vehicle: Vehicle) {
  const vehicleNodeName: string = vehicle.model?.value || "Vehicle";
  const patients: Patient[] = vehicle.vehicle_occupants?.value || [];
  const patientNodes: Node[] = patients.map(
    createPatientNode
  );
  const vehicleForces =
    vehicle.impact_forces_g?.map(
      (vehicleForce) => vehicleForce.value
    ) || [];
  const vehicleNode = vehicleForces
    .map((vehicleForce) =>
      createNode(`${translate("impact_forces_g")}: ${vehicleForce}`)
    )
    .reduce(addChild, createBasicNode(vehicle, vehicleNodeName));

  return patientNodes.reduce(
    addChild,
    vehicleNode
  );
}

function TreeComponent({ data }: { data: Simulation }) {
  let scenarios = data.scenarios;
  let patients = data.persons;
  let vehicles = data.vehicles;

  return (
    <ul className="tree">
      {scenarios &&
        scenarios.map((scenario) => (
          <NodeComponent node={createScenarioNode(scenario)} />
        ))}
      {patients &&
        patients.map((patient) => (
          <NodeComponent node={createPatientNode(patient)} />
        ))}
      {vehicles &&
        vehicles.map((vehicle) => (
          <NodeComponent node={createVehicleNode(vehicle)} />
        ))}
    </ul>
  );
}

export default (data: Simulation) => (
  <ScrollArea.Root className="h-screen w-[300px] overflow-hidden bg-white border">
    <ScrollArea.Viewport className="size-full rounded">
      <div className="grid grid-cols-1 gap-5 px-5 py-5">
        <div>Simulation Data</div>
        <div className="h-full w-full">
          <SelectComponent></SelectComponent>
        </div>
        <div>
          <ToggleGroupButton></ToggleGroupButton>
        </div>
        <button className="hover:underline">
          <DropdownMenuParameters />
        </button>
        <div className="parameter-sliders grid gap-5">
          <div>
            <SliderComponent name="param" />
          </div>
        </div>
        <div className="components-list-view">
          Scenario
          <TreeComponent
            data={{
              scenarios: [exampleData.scenario_1],
            }}
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
