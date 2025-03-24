export enum DataSource {
  VEHICLE_TELEMETRY,
  VEHICLE_TELEMETRY_ACCELEROMETER,
  VEHICLE_TELEMETRY_GYROSCOPE,
  SMART_WATCH,
  SMART_PHONE,
  VEHICLE_PULSE_SENSOR,
  OTHER,
}

export enum AccidentType {
  CAR_ACCIDENT = "Bilolycka",
}

export enum CarAccidentType {
  SINGLE,
  TO_VEHICLE,
  INTERSECTION,
  LONGITUDINAL,
  REAR_END,
  TRAM_OR_TRAIN,
  WILD_LIFE_ANIMAL,
  SIDE_SWIPE,
  ROLL_OVER,
  RIGHT_TURN,
  HIT_FIXED_OBJECT,
  RIGHT_ANGLE,
  OTHER,
}

export enum AccidentLocation {
  URBAN = "Urban",
  RURAL = "Rural",
}

export enum AirbagDeployment {
  DEPLOYED,
  NOT_DEPLOYED,
  NO_AIRBAG,
}

export enum Sex {
  MALE = "Man",
  FEMALE = "Kvinna",
}

export enum SeatPosition {
  FRONT_PASSENGER = "Fram",
  REAR_PASSENGER = "Bak",
}

export interface Data<T> {
  value: T;
  data_source: DataSource;
}

export interface Simulation {
  scenarios?: Scenario[];
  persons?: Patient[];
  vehicles?: Vehicle[];
}

export interface Scenario {
  accident_type?: Data<AccidentType>;
  location?: Data<AccidentLocation>;
  date?: Data<string>;
  time?: Data<string>;
  weather?: Data<string>;
  road_condition?: Data<string>;
  visibility?: Data<string>;
  road_type?: Data<string>;
  road_surface?: Data<string>;
  road_alignment?: Data<string>;
  road_profile?: Data<string>;
  posted_speed_limit?: Data<number>;
  vehicles?: Data<Vehicle[]>;
  pedestrians?: Data<Patient>[];
  minutes_to_trauma_center?: Data<Number>;
  distance_to_major_trauma_center_km?: Data<Number>;
}

export interface CrashInformation {
  angle_of_impact?: Data<number>;
  compartment_intrusion?: Data<number>;
}

export interface Vehicle {
  vehicle_occupants?: Data<VehicleOccupant[]>;
  accident_type?: Data<CarAccidentType[]>;
  airbag_deployment?: Data<AirbagDeployment>;
  seatbelt_use?: Data<boolean>;
  direction?: Data<string>;
  gps_coordinates?: Data<string>;
  location_of_impact?: Data<string>;
  vehicle_speed_kmph?: Data<number>;
  delta_v_kmph?: Data<number>;
  impact_forces_g?: Data<number>[];
  model_year?: Data<number>;
  car_weight_kg?: Data<number>;
  registration_number?: Data<string>;
  model?: Data<string>;
  crash_information?: CrashInformation;
}

export interface Patient {
  name?: string;
  sex?: Data<Sex>;
  age?: Data<number>;
  elderly?: Data<boolean>;
  pulse?: Data<number>;
  breathing_rate?: Data<number>;
  identified_injuries?: Data<string[]>;
}

export interface VehicleOccupant extends Patient {
  belt_use?: Data<string>;
  seat_position?: Data<SeatPosition>;
  airbag_deployment?: Data<AirbagDeployment>;
}
