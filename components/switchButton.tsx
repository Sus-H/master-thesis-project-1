import * as React from "react";
import { Switch } from "radix-ui";
import "app/styles.css";

const SwitchButton = () => (
  <form>
    <div style={{ display: "flex", alignItems: "center" }}>
      <label
        className="Label"
        htmlFor="airplane-mode"
        style={{ paddingRight: 15 }}
      >
        Miljö
      </label>
      <Switch.Root
        className="SwitchRoot relative"
        id="airplane-mode"
      >
        <div className="relative grid grid-cols-2 text-xs text-white z-40">
          <p>Urban</p>
          <p>Lantlig</p>
        </div>
        <Switch.Thumb className="SwitchThumb absolute inset-y-0.5 z-10" />
      </Switch.Root>
    </div>
  </form>
);

export default SwitchButton;
