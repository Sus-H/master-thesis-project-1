import "app/style.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon, PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { DataContext, type DataContextType } from "./dataContext";

const peopleItems: string[] = [
  "Kalle",
  "Birgit",
  "Lasse",
  "Vuxen",
  "Barn/Ungdom",
  "65+ person",
];

const vehicleItems: string[] = ["Bil"];

const environmentItems: string[] = ["Plats", "Väder"];

const medicalData: string[] = ["Patient Journal Data"];

function createMenuItems(
  items: string[],
  checkedStates: { [key: string]: boolean },
  setCheckedStates: (item: string, checked: boolean) => void,
  label: string,
  handleItemClick: (item: string) => void
) {
  return (
    <>
      <DropdownMenu.Label className="DropdownMenuLabel">
        {label}
      </DropdownMenu.Label>
      {items.map((item) => (
        <DropdownMenu.Item
          key={item}
          className="DropdownMenuItem"
          onSelect={(event) => {
            event.preventDefault();
            handleItemClick(item);
          }}
        >
          <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
            {checkedStates[item] ? <CheckIcon /> : <PlusIcon />}
          </DropdownMenu.ItemIndicator>
          {item}
        </DropdownMenu.Item>
      ))}
    </>
  );
}

function DropdownMenuComponents() {
  const [open, setOpen] = useState(false);
  const [treeList, setTreeList] = useState([]);
  const [checkedStates, setCheckedStates] = useState<{
    [key: string]: boolean;
  }>({
    Kalle: false,
    Britta: false,
    Lasse: false,
    Vuxen: false,
    "Barn/Ungdom": false,
    "65+ person": false,
    Bil: false,
    Plats: false,
    Väder: false,
    "Patient Journal Data": false,
  });

  const setCheckedState = (item: string, checked: boolean) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [item]: checked,
    }));
  };

  const handleItemClick = (item: string) => {
    setCheckedState(item, true);
    setTimeout(() => {
      setCheckedState(item, false);
    }, 5000);  
  };

  return (
    <div>
      <DropdownMenu.Root
        open={open}
        onOpenChange={setOpen}
      >
        <DropdownMenu.Trigger asChild>
          <p onClick={() => setOpen(true)}><img src="images/add_component.svg" className="inline"/>Lägg till komponenter</p>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="DropdownMenuContent">
            Välj komponenter till din simulering
            <DropdownMenu.Separator className="DropdownMenuSeparator" />
            {createMenuItems(
              peopleItems,
              checkedStates,
              setCheckedState,
              "Personer",
              handleItemClick
            )}
            <DropdownMenu.Separator className="DropdownMenuSeparator" />
            {createMenuItems(
              vehicleItems,
              checkedStates,
              setCheckedState,
              "Fordon",
              handleItemClick
            )}
            <DropdownMenu.Separator className="DropdownMenuSeparator" />
            {createMenuItems(
              environmentItems,
              checkedStates,
              setCheckedState,
              "Miljö",
              handleItemClick
            )}
            <DropdownMenu.Separator className="DropdownMenuSeparator" />
            {createMenuItems(
              medicalData,
              checkedStates,
              setCheckedState,
              "Medicinsk Data",
              handleItemClick
            )}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}

export default DropdownMenuComponents;
