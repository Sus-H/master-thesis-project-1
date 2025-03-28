import "app/styles.css";
import { DropdownMenu } from "radix-ui";
import {
  CheckIcon,
  ChevronDownIcon,
  PlusCircledIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

export let accidentItems: string[] = [
  "Delta-V",
  "Uppmätt hastighet",
  "Accelorometer",
  "Fordonsdetaljer",
];
export let locationItems: string[] = [
  "Transport till trauma center",
  "Transportsträcka till trauma center",
  "Hastighetsgräns",
  "Position",
  "Väder",
  "Tid",
];

export let involvedItems: string[] = [
  "Medelålder",
  "Kön",
  "Säkerhetsbälte",
  "Position i bil",
];

function createMenuItem(
  item: string,
  checkedStates: { [key: string]: boolean },
  setCheckedStates: (item: string, checked: boolean) => void
) {
  return (
    <DropdownMenu.CheckboxItem
      key={item}
      className="DropdownMenuCheckboxItem"
      checked={checkedStates[item]}
      onCheckedChange={(checked) => {
        setCheckedStates(item, checked);
      }}
      onSelect={(event) => event.preventDefault()}
    >
      <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
        <CheckIcon />
      </DropdownMenu.ItemIndicator>
      {item}
    </DropdownMenu.CheckboxItem>
  );
}

function createMenuItems(
  items: string[],
  checkedStates: { [key: string]: boolean },
  setCheckedStates: (item: string, checked: boolean) => void,
  label: string
) {
  return (
    <>
      <DropdownMenu.Label className="DropdownMenuLabel">
        {label}
      </DropdownMenu.Label>
      {items.map((item) =>
        createMenuItem(item, checkedStates, setCheckedStates)
      )}
    </>
  );
}

function DropdownMenuParameters({
  checkedStates,
  setCheckedStates,
}: {
  checkedStates: { [key: string]: boolean };
  setCheckedStates: (newState: { [key: string]: boolean }) => void;
}) {
  const [_, setOpen] = useState(false);

  const setCheckedState = (item: string, checked: boolean) => {
    setCheckedStates({
      ...checkedStates,
      [item]: checked,
    });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <p
          onClick={() => setOpen(true)}
          className="flex"
        >
          {/* <img
            src="images/Sliders.svg"
            className="inline"
          /> */}
          Välj Parametrar
          <ChevronDownIcon className="ml-1 mt-1.5 inline"></ChevronDownIcon>
        </p>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent absolute">
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          {createMenuItems(
            accidentItems,
            checkedStates,
            setCheckedState,
            "Olycka"
          )}
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          {createMenuItems(
            locationItems,
            checkedStates,
            setCheckedState,
            "Plats"
          )}
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          {createMenuItems(
            involvedItems,
            checkedStates,
            setCheckedState,
            "Involverade"
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default DropdownMenuParameters;
