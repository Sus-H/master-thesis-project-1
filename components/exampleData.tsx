import * as Model from "components/model";
// import TreeList from "components/treeList";
import { Position } from "@xyflow/react";

function datasource_other<T>(value: T) {
  return {
    value: value,
    data_source: Model.DataSource.OTHER,
  };
}

function datasource_telemetry<T>(value: T) {
  return {
    value: value,
    data_source: Model.DataSource.VEHICLE_TELEMETRY,
  };
}

const occupant_1: Model.VehicleOccupant = {
  name: "Birgit",
  sex: datasource_other(Model.Sex.FEMALE),
  age: datasource_other(70),
  elderly: datasource_other(true),
  belt_use: datasource_other(true),
  seat_position: datasource_other(Model.SeatPosition.REAR_PASSENGER),
};

const occupant_2: Model.VehicleOccupant = {
  name: "Lasse",
  sex: datasource_other(Model.Sex.MALE),
  age: datasource_other(44),
  elderly: datasource_other(false),
  belt_use: datasource_other(true),
  seat_position: datasource_other(Model.SeatPosition.FRONT_PASSENGER),
};

const occupant_3: Model.VehicleOccupant = {
  name: "Kalle",
  sex: datasource_other(Model.Sex.MALE),
  age: datasource_other(16),
  elderly: datasource_other(false),
  belt_use: datasource_other(true),
  seat_position: datasource_other(Model.SeatPosition.FRONT_PASSENGER),
};

const vehicle_1: Model.Vehicle = {
  accident_type: datasource_other([
    Model.CarAccidentType.SINGLE,
    Model.CarAccidentType.HIT_FIXED_OBJECT,
  ]),
  model: datasource_other("Volvo XC60"),
  model_year: datasource_other(2015),
  car_weight_kg: datasource_other(1850),
  registration_number: datasource_other("MIR 593"),
  vehicle_occupants: datasource_other([
    occupant_1,
    occupant_2,
    occupant_3,
  ]),
  vehicle_speed_kmph: datasource_telemetry(71.78),
  delta_v_kmph: datasource_telemetry(71.78),
  impact_forces_g: [
    {
      value: 96.4,
      data_source: Model.DataSource.VEHICLE_TELEMETRY_ACCELEROMETER,
    },
  ],
  location_of_impact: datasource_telemetry("Front"),
  gps_coordinates: datasource_telemetry("57.6282762, 12.4156136"),
};

const scenario_1: Model.Scenario = {
  accident_type: {
    value: Model.AccidentType.CAR_ACCIDENT,
    data_source: Model.DataSource.VEHICLE_TELEMETRY,
  },
  location: {
    value: Model.AccidentLocation.URBAN,
    data_source: Model.DataSource.SMART_PHONE,
  },
  date: {
    value: "2025-03-13",
    data_source: Model.DataSource.SMART_PHONE,
  },
  time: {
    value: "14:30",
    data_source: Model.DataSource.SMART_PHONE,
  },
  weather: datasource_other("Not Raining"),
  road_condition: datasource_other("Dry"),
  visibility: datasource_other("Good"),
  posted_speed_limit: datasource_other(70),
  distance_to_major_trauma_center_km: 34.5,
  vehicles: datasource_other([vehicle_1]),
};

export const initialNodes = [
  {
    id: 'horizontal-1',
    sourcePosition: Position.Right,
    type: 'input',
    data: { label: 'Input' },
    position: { x: 0, y: 80 },
  },
  {
    id: 'horizontal-2',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: 'A Node' },
    position: { x: 250, y: 0 },
  },
  {
    id: 'horizontal-3',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: 'Node 3' },
    position: { x: 250, y: 160 },
  },
  {
    id: 'horizontal-4',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: 'Node 4' },
    position: { x: 500, y: 0 },
  },
  {
    id: 'horizontal-5',
    sourcePosition: Position.Top,
    targetPosition: Position.Bottom,
    data: { label: 'Node 5' },
    position: { x: 500, y: 100 },
  },
  {
    id: 'horizontal-6',
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
    data: { label: 'Node 6' },
    position: { x: 500, y: 230 },
  },
  {
    id: 'horizontal-7',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: 'Node 7' },
    position: { x: 750, y: 50 },
  },
  {
    id: 'horizontal-8',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: 'Node 8' },
    position: { x: 750, y: 300 },
  },
];

 
export const initialEdges = [
  {
    id: 'horizontal-e1-2',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-2',
    animated: true,
  },
  {
    id: 'horizontal-e1-3',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-3',
    animated: true,
  },
  {
    id: 'horizontal-e1-4',
    source: 'horizontal-2',
    type: 'smoothstep',
    target: 'horizontal-4',
    label: 'edge label',
  },
  {
    id: 'horizontal-e3-5',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-5',
    animated: true,
  },
  {
    id: 'horizontal-e3-6',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-6',
    animated: true,
  },
  {
    id: 'horizontal-e5-7',
    source: 'horizontal-5',
    type: 'smoothstep',
    target: 'horizontal-7',
    animated: true,
  },
  {
    id: 'horizontal-e6-8',
    source: 'horizontal-6',
    type: 'smoothstep',
    target: 'horizontal-8',
    animated: true,
  },
];


// // Instantiate TreeList and add example data
// const treeList = new TreeList("Example TreeList");
// treeList.addLeaf("Leaf 1");
// treeList.addLeaf("Leaf 2");
// treeList.addLeaf("Leaf 3");

// // Render the TreeList
// const TreeListComponent = () => {
//   return (
//     <div>
//       {treeList.treeList()}
//     </div>
//   );
// };

// export default TreeListComponent;