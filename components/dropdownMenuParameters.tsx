import "app/styles.css";
import { DropdownMenu } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

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
      {items.map((item) => (
        <DropdownMenu.CheckboxItem
          key={item}
          className="DropdownMenuCheckboxItem"
          checked={checkedStates[item]}
          onCheckedChange={(checked) =>
            setCheckedStates(item, checked)
          }
          onSelect={(event) => event.preventDefault()}
        >
          <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
            <CheckIcon />
          </DropdownMenu.ItemIndicator>
          {item}
        </DropdownMenu.CheckboxItem>
      ))}
    </>
  );
}

function DropdownMenuParameters() {
  const [open, setOpen] = useState(false);

  const [checkedStates, setCheckedStates] = useState<{
    [key: string]: boolean;
  }>({
    "Delta-V": false,
    "Uppmätt hastighet": false,
    Accelorometer: false,
    Fordonsdetaljer: false,
    "Transport till trauma center": false,
    "Transportsträcka till trauma center": false,
    Hastighetsgräns: false,
    Position: false,
    Väder: false,
    Tid: false,
    Medelålder: false,
    Kön: false,
    Säkerhetsbälte: false,
    "Position i bil": false,
  });

  const setCheckedState = (item: string, checked: boolean) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [item]: checked,
    }));
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
        <DropdownMenu.Content className="DropdownMenuContent">
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
