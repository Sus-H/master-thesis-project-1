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

export const occupant_1: Model.VehicleOccupant = {
  name: "Birgit",
  sex: datasource_other(Model.Sex.FEMALE),
  age: datasource_other(70),
  elderly: datasource_other(true),
  belt_use: datasource_other("Ja"),
  seat_position: datasource_other(Model.SeatPosition.REAR_PASSENGER),
};

export const occupant_2: Model.VehicleOccupant = {
  name: "Lasse",
  sex: datasource_other(Model.Sex.MALE),
  age: datasource_other(44),
  elderly: datasource_other(false),
  belt_use: datasource_other("Ja"),
  seat_position: datasource_other(Model.SeatPosition.FRONT_PASSENGER),
};

export const occupant_3: Model.VehicleOccupant = {
  name: "Kalle",
  sex: datasource_other(Model.Sex.MALE),
  age: datasource_other(16),
  elderly: datasource_other(false),
  belt_use: datasource_other("Ja"),
  seat_position: datasource_other(Model.SeatPosition.FRONT_PASSENGER),
};

export const vehicle_1: Model.Vehicle = {
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

export const scenario_1: Model.Scenario = {
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
  distance_to_major_trauma_center_km: datasource_other(34.5),
  vehicles: datasource_other([vehicle_1]),
};
