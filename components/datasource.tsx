import * as Model from "components/model";

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

export let trackData: Object[] = [
  {
    x: new Date(2000, 2, 11),
    y: 15,
    y1: 39,
    y2: 60,
    y3: 75,
    y4: 85,
  },
  {
    x: new Date(2000, 9, 14),
    y: 20,
    y1: 30,
    y2: 55,
    y3: 75,
    y4: 83,
  },
  {
    x: new Date(2001, 2, 11),
    y: 25,
    y1: 28,
    y2: 48,
    y3: 68,
    y4: 85,
  },
  {
    x: new Date(2001, 9, 16),
    y: 21,
    y1: 35,
    y2: 57,
    y3: 75,
    y4: 87,
  },
  {
    x: new Date(2002, 2, 7),
    y: 13,
    y1: 39,
    y2: 62,
    y3: 71,
    y4: 82,
  },
  {
    x: new Date(2002, 9, 7),
    y: 18,
    y1: 41,
    y2: 64,
    y3: 69,
    y4: 74,
  },
  {
    x: new Date(2003, 2, 11),
    y: 24,
    y1: 45,
    y2: 57,
    y3: 81,
    y4: 73,
  },
  {
    x: new Date(2003, 9, 14),
    y: 23,
    y1: 48,
    y2: 53,
    y3: 84,
    y4: 75,
  },
  {
    x: new Date(2004, 2, 6),
    y: 19,
    y1: 54,
    y2: 63,
    y3: 85,
    y4: 73,
  },
  {
    x: new Date(2004, 9, 6),
    y: 31,
    y1: 55,
    y2: 50,
    y3: 87,
    y4: 60,
  },
  {
    x: new Date(2005, 2, 11),
    y: 39,
    y1: 57,
    y2: 66,
    y3: 75,
    y4: 48,
  },
  {
    x: new Date(2005, 9, 11),
    y: 50,
    y1: 60,
    y2: 65,
    y3: 70,
    y4: 55,
  },
  {
    x: new Date(2006, 2, 11),
    y: 24,
    y1: 60,
    y2: 79,
    y3: 85,
    y4: 40,
  },
];
