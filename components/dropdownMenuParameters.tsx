import "app/styles.css";
import { DropdownMenu } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { SliderComponent } from "./slider";

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
  const [open, setOpen] = useState(false);

  const setCheckedState = (item: string, checked: boolean) => {
    setCheckedStates({
      ...checkedStates,
      [item]: checked,
    });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <p onClick={() => setOpen(true)}>
          <img
            src="images/Sliders.svg"
            className="inline"
          />{" "}
          Välj Parametrar
        </p>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent absolute -right-70">
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          {createMenuItems(
            accidentItems,
            checkedStates,
            setCheckedState,
            "Accident"
          )}
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          {createMenuItems(
            locationItems,
            checkedStates,
            setCheckedState,
            "Location"
          )}
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          {createMenuItems(
            involvedItems,
            checkedStates,
            setCheckedState,
            "Involved"
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default DropdownMenuParameters;
