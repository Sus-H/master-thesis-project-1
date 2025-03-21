import React, { useState } from "react";
import { NavButton } from "components/nav-button";
// import AlgorithmCards from "components/algorithmCard";

export default function PageAlgorithmBrowser() {
  return (
    <div className="flex">
      <div className="flex-1">
        <h1>Welcome to the Algorithm Browser</h1>
        <NavButton to="/">Home</NavButton>
        {/* <AlgorithmCards></AlgorithmCards> */}
        <button className="border hover:underline active:bg-amber-700">
          Aktivera Algoritm
        </button>
      </div>
    </div>
  );
}
