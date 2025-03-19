import { ToggleGroup } from "radix-ui";
import "app/styles.css";

const ToggleGroupButton = () => (
  <ToggleGroup.Root
    className="ToggleGroup"
    type="single"
    defaultValue="center"
    aria-label="Text alignment"
  >
    <ToggleGroup.Item
      className="ToggleGroupItem"
      value="left"
      aria-label="Left aligned"
    >
      One
    </ToggleGroup.Item>
    <ToggleGroup.Item
      className="ToggleGroupItem"
      value="center"
      aria-label="Center aligned"
    >
      Two
    </ToggleGroup.Item>
  </ToggleGroup.Root>
);

export default ToggleGroupButton;
