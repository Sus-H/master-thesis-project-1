import React, { useState } from "react";
import { NavButton } from "components/nav-button";

export default function PageAlgorithmBrowser() {
  return (
    <div className="flex">
      <div className="flex-1">
        <h1>Welcome to the Algorithm Browser</h1>
        <NavButton to="/">Home</NavButton>
      </div>
    </div>
  );
}
