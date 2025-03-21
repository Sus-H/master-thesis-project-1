import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function SimpleLineChart() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: "pv" },
        { data: uData, label: "uv" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}

const patientGroups = [
  "Förare (16 år)",
  "Framsätespassagerare (44 år)",
  "Baksätespassagerare (70 år)",
];

const osisSurvivalRates = [90, 85, 70]; // OSIS överlevnadschans i procent
const sirpSurvivalRates = [88, 83, 75]; // SIRP överlevnadschans i procent

export function SurvivalLineChart() {
  return (
    <LineChart
      width={300}
      height={300}
      series={[
        {
          data: osisSurvivalRates,
          label: "OSIS - Överlevnad (%)",
          color: "red",
        },
        {
          data: sirpSurvivalRates,
          label: "SIRP - Överlevnad (%)",
          color: "blue",
        },
      ]}
      xAxis={[{ scaleType: "point", data: patientGroups }]}
    />
  );
}

const resourceCategories = [
  "Ambulanser",
  "Läkare",
  "Sjuksköterskor",
  "Helikoptrar",
  "Sjukhusplatser",
];

const osisResources = [3, 6, 10, 1, 15]; // OSIS resursförbrukning
const sirpResources = [2, 5, 8, 2, 12]; // SIRP resursförbrukning

export function ResourceBarChart() {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: resourceCategories }]}
      series={[
        { data: osisResources, label: "OSIS", color: "red" },
        { data: sirpResources, label: "SIRP", color: "blue" },
      ]}
      width={300}
      height={300}
    />
  );
}
