import { addChild, createNode, type Node } from "./treeNode";
import type { Patient, Scenario, Simulation, Vehicle } from "./model";
import { translate } from "./languageMap";

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
    .reduce(addChild, createNode(parentNodeName));
}

export function createScenarioNode(scenario: Scenario) {
  const scenarioNodeName: string =
    scenario.accident_type?.value || "Scenario";
  const scenarioNode: Node = createBasicNode(
    scenario,
    scenarioNodeName
  );

  const vehicles: Vehicle[] = scenario.vehicles?.value || [];
  const vehicleNodes: Node[] = vehicles.map(createVehicleNode);
  const scenarioNodeWithVehicles = vehicleNodes.reduce(
    addChild,
    scenarioNode
  );

  const patients: Patient[] =
    scenario.pedestrians?.map((patient) => patient.value) || [];
  const patientNodes: Node[] = patients.map(createPatientNode);
  const scenarioNodeWithChildren = patientNodes.reduce(
    addChild,
    scenarioNodeWithVehicles
  );

  return scenarioNodeWithChildren;
}

export function createPatientNode(patient: Patient) {
  const patientNodeName: string = patient.name || "Patient";
  return createBasicNode(patient, patientNodeName);
}

export function createVehicleNode(vehicle: Vehicle) {
  const vehicleNodeName: string = vehicle.model?.value || "Vehicle";
  const patients: Patient[] = vehicle.vehicle_occupants?.value || [];
  const patientNodes: Node[] = patients.map(createPatientNode);
  const vehicleForces =
    vehicle.impact_forces_g?.map(
      (vehicleForce) => vehicleForce.value
    ) || [];
  const vehicleNode = vehicleForces
    .map((vehicleForce) =>
      createNode(`${translate("impact_forces_g")}: ${vehicleForce}`)
    )
    .reduce(addChild, createBasicNode(vehicle, vehicleNodeName));

  return patientNodes.reduce(addChild, vehicleNode);
}
