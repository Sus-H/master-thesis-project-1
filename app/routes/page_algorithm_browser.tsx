import React, { useState } from "react";
import { NavButton } from "components/nav-button";

export let algorithmNames: string[] = [
  "SIRP",
  "OSISP",
  "URGENCY",
  "OnStar",
  "D-call NET",
  "Nidhimoto",
];

const AlgorithmCard = ({ name, onClick }: { name: string; onClick: () => void }) => {
  return (
    <div className="border p-4 rounded shadow-md m-2 cursor-pointer" onClick={onClick}>
      <h3 className="text-lg font-bold">{name}</h3>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Enable
      </button>
    </div>
  );
};

export default function PageAlgorithmBrowser() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(null);

  const handleCardClick = (name: string) => {
    setSelectedAlgorithm(name);
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <h1>Welcome to the Algorithm Browser</h1>
        <NavButton to="/">Home</NavButton>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {algorithmNames.map((name) => (
            <AlgorithmCard key={name} name={name} onClick={() => handleCardClick(name)} />
          ))}
        </div>
      </div>
      {selectedAlgorithm && (
        <div className="w-1/3 p-4 border-l bg-gray-100">
          <h2 className="text-xl font-bold">{selectedAlgorithm}</h2>
          <p>Some information about {selectedAlgorithm}.</p>
          <img src={`images/${selectedAlgorithm.toLowerCase()}.jpg`} alt={selectedAlgorithm} className="mt-4" />
        </div>
      )}
    </div>
  );
}