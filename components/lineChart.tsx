import React from "react";
import { Chart } from "react-google-charts";

// Data for Survival Line Chart
const patientGroups = [
  "Kalle (16 år)",
  "Lasse (44 år)",
  "Britta (70 år)",
];

const osisSurvivalRates = [90, 85, 70]; // OSIS överlevnadschans i procent
const sirpSurvivalRates = [88, 83, 75]; // SIRP överlevnadschans i procent

const survivalData = [
  ["Patient Group", "OSIS - Överlevnad (%)", "SIRP - Överlevnad (%)"],
  ...patientGroups.map((group, index) => [
    group,
    osisSurvivalRates[index],
    sirpSurvivalRates[index],
  ]),
];

const survivalOptions = {
  title: "Survival Rates by Patient Group",
  hAxis: {
    title: "Patient Group",
    slantedText: true, // Enables slanted text for x-axis labels
    slantedTextAngle: 45, // Tilts the labels by 45 degrees
  },
  vAxis: {
    title: "Survival Rate (%)",
  },
  legend: { position: "top" }, // Moves the legend to the top
  lineWidth: 2, // Adjusts the line thickness
  pointSize: 5, // Adds points to the line chart
};

// Data for Resource Bar Chart
const resourceCategories = [
  "Ambulanser",
  "Läkare",
  "Sjuksköterskor",
  "Helikoptrar",
  "Sjukhusplatser",
];

const osisResources = [3, 6, 10, 1, 15]; // OSIS resursförbrukning
const sirpResources = [2, 5, 8, 2, 12]; // SIRP resursförbrukning

const resourceData = [
  ["Resurser", "OSIS", "SIRP"],
  ...resourceCategories.map((category, index) => [
    category,
    osisResources[index],
    sirpResources[index],
  ]),
];

const resourceOptions = {
  title: "Resursförbrukning",
  hAxis: {
    title: "Resurser",
    slantedText: true, // Enables slanted text for x-axis labels
    slantedTextAngle: 45, // Tilts the labels by 45 degrees
  },
  vAxis: {
    title: "Antal",
  },
  bar: { groupWidth: "75%" }, // Adjusts the width of the bars
  legend: { position: "top" }, // Moves the legend to the top
};

// Survival Line Chart Component
export function SurvivalLineChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={survivalData}
      options={survivalOptions}
    />
  );
}

// Resource Bar Chart Component
export function ResourceBarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={resourceData}
      options={resourceOptions}
    />
  );
}

// Example Usage
export default function App() {
  return (
    <div>
      <h1>Charts Example</h1>
      <h2>Survival Line Chart</h2>
      <SurvivalLineChart />
      <h2>Resource Bar Chart</h2>
      <ResourceBarChart />
    </div>
  );
}