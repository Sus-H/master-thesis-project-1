import { Switch } from "radix-ui";
import "app/styles.css";

const SwitchButton = () => (
  <div className="grid grid-rows-2 px-2 pb-2">
    <label className="text-sm"> Olycksplats</label>
    <Switch.Root className="SwitchRoot relative">
      <div className="relative grid grid-cols-2 text-xs text-white z-20">
        <p>Urban</p>
        <p>Lantlig</p>
      </div>
      <Switch.Thumb className="SwitchThumb absolute inset-y-0.5 z-10" />
    </Switch.Root>
  </div>
);

export default SwitchButton;
