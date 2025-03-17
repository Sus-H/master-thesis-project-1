export const languageMap: Record<string, string> = {
  // DataSource translations
  VEHICLE_TELEMETRY: "Fordonstelemetri",
  VEHICLE_TELEMETRY_ACCELEROMETER: "Accelerometer",
  VEHICLE_TELEMETRY_GYROSCOPE: "Gyroskop",
  SMART_WATCH: "Smartklocka",
  SMART_PHONE: "Smarttelefon",
  VEHICLE_PULSE_SENSOR: "Pulsensor i fordon",
  OTHER: "Annat",

  // AccidentType translations
  CAR_ACCIDENT: "Bilolycka",

  // CarAccidentType translations
  SINGLE: "Singelolycka",
  TO_VEHICLE: "Kollision med fordon",
  INTERSECTION: "Korsning",
  LONGITUDINAL: "Längsgående",
  REAR_END: "Påkörning bakifrån",
  TRAM_OR_TRAIN: "Spårvagn eller tåg",
  WILD_LIFE_ANIMAL: "Viltolycka",
  SIDE_SWIPE: "Sidoskrapning",
  ROLL_OVER: "Omkullkörning",
  RIGHT_TURN: "Höger sväng",
  HIT_FIXED_OBJECT: "Kollision med fast objekt",
  RIGHT_ANGLE: "Rät vinkel",
  OTHER: "Annat",

  // AccidentLocation translations
  URBAN: "Stad",
  RURAL: "Landsbygd",

  // AirbagDeployment translations
  DEPLOYED: "Utlöst",
  NOT_DEPLOYED: "Ej utlöst",
  NO_AIRBAG: "Ingen airbag",

  // Sex translations
  MALE: "Man",
  FEMALE: "Kvinna",

  // SeatPosition translations
  FRONT_PASSENGER: "Fram",
  REAR_PASSENGER: "Bak",

  // Scenario translations
  accident_type: "Olyckstyp",
  location: "Plats",
  date: "Datum",
  time: "Tid",
  weather: "Väder",
  road_condition: "Väglag",
  visibility: "Sikt",
  road_type: "Vägtyp",
  road_surface: "Vägyta",
  road_alignment: "Vägriktning",
  road_profile: "Vägprofil",
  posted_speed_limit: "Hastighetsbegränsning",
  vehicles: "Fordon",
  pedestrians: "Fotgängare",
  minutes_to_trauma_center: "Minuter till traumacenter",
  distance_to_major_trauma_center_km:
    "Avstånd till traumacenter (km)",

  // CrashInformation translations
  angle_of_impact: "Kollisionsvinkel",
  compartment_intrusion: "Inträngning i kupé",

  // Vehicle translations
  vehicle_occupants: "Fordonspassagerare",
  airbag_deployment: "Airbagutlösning",
  seatbelt_use: "Bältesanvändning",
  direction: "Riktning",
  gps_coordinates: "GPS-koordinater",
  location_of_impact: "Kollisionsplats",
  vehicle_speed_kmph: "Fordonshastighet (km/h)",
  delta_v_kmph: "Delta V (km/h)",
  impact_forces_g: "Kraftpåverkan (G)",
  model_year: "Modellår",
  car_weight_kg: "Bilens vikt (kg)",
  registration_number: "Registreringsnummer",
  model: "Modell",

  // Patient translations
  name: "Namn",
  sex: "Kön",
  age: "Ålder",
  elderly: "Äldre",
  pulse: "Puls",
  breathing_rate: "Andningsfrekvens",
  identified_injuries: "Identifierade skador",

  // VehicleOccupant translations
  belt_use: "Bältesanvändning",
  seat_position: "Sittplats",
};

export function translate(key: string): string {
  return languageMap[key] || key; // Return the Swedish translation if available, otherwise return the key itself
}
