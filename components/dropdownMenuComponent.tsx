import "app/styles.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon, PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { addChild, createNode } from "./treeNode";
import { type Node } from "./treeNode";
import * as Model from "components/model";
import {
  occupant_1,
  occupant_2,
  occupant_3,
  vehicle_1,
} from "components/exampleData";
import { createPatientNode, createVehicleNode } from "./createNode";

const peopleItems: Model.Patient[] = [
  occupant_1,
  occupant_2,
  occupant_3,
  // "Vuxen",
  // "Barn/Ungdom",
  // "65+ person",
];

const vehicleItems: Model.Vehicle[] = [vehicle_1];

const environmentItems: string[] = ["Plats", "Väder"];

const medicalData: string[] = ["Patient Journal Data"];

const zip = (a, b) => a.map((k, i) => [k, b[i]]);

function createMenuItems(
  itemNames: string[],
  items: Model.Patient[] | Model.Vehicle[] | string[],
  checkedStates: { [key: string]: boolean },
  setCheckedStates: (item: string, checked: boolean) => void,
  label: string,
  handleItemClick: (
    item: string | Model.Patient | Model.Vehicle
  ) => void
) {
  const zippedItems = zip(itemNames, items);

  return (
    <>
      <DropdownMenu.Label className="DropdownMenuLabel">
        {label}
      </DropdownMenu.Label>
      {zippedItems.map(([itemName, item]) => (
        <DropdownMenu.Item
          key={itemName}
          className="DropdownMenuItem"
          onSelect={(event) => {
            // event.preventDefault();
            handleItemClick(item);
          }}
        >
          <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
            {checkedStates[itemName] ? <CheckIcon /> : <PlusIcon />}
          </DropdownMenu.ItemIndicator>
          {itemName}
        </DropdownMenu.Item>
      ))}
    </>
  );
}

function DropdownMenuComponents({
  nodeTree,
  setNodeTree,
}: {
  nodeTree: Node;
  setNodeTree: (newTree: Node) => void;
}) {
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

  const handleItemClick = (
    item: string | Model.Patient | Model.Vehicle
  ) => {
    if (item instanceof string)
      setNodeTree(addChild(nodeTree, createNode(item)));
    if (item in peopleItems)
      setNodeTree(addChild(nodeTree, createPatientNode(item)));
    if (item in vehicleItems)
      setNodeTree(addChild(nodeTree, createVehicleNode(item)));
  };

  return (
    <div className="z-50">
      <DropdownMenu.Root
        open={open}
        onOpenChange={setOpen}
      >
        <DropdownMenu.Trigger asChild>
          <p onClick={() => setOpen(true)}>
            <img
              src="images/add_component.svg"
              className="inline"
            />
            Lägg till komponenter
          </p>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="DropdownMenuContent">
            Välj komponenter till din simulering
            <DropdownMenu.Separator className="DropdownMenuSeparator" />
            {createMenuItems(
              [occupant_1.name, occupant_2.name, occupant_3.name],
              peopleItems,
              checkedStates,
              setCheckedState,
              "Personer",
              handleItemClick
            )}
            <DropdownMenu.Separator className="DropdownMenuSeparator" />
            {createMenuItems(
              [vehicle_1.model?.value],
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
