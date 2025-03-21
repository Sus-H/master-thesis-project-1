import "app/styles.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon, PlusIcon } from "@radix-ui/react-icons";
import { useContext, useState } from "react";
import { addChild, createNode, type TreeNode } from "./treeNode";
import * as Model from "components/model";
import {
  occupant_1,
  occupant_2,
  occupant_3,
  vehicle_1,
} from "components/exampleData";
import { createPatientNode, createVehicleNode } from "./createNode";
import { NodeStateContext } from "./nodeStateContext";

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

const zip = <T, U>(a: T[], b: U[]): [T, U][] => a.map((k, i) => [k, b[i]]);

function createMenuItems(
  itemNames: string[],
  items: (Model.Patient | Model.Vehicle | string)[],
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
            {false ? <CheckIcon /> : <PlusIcon />}
          </DropdownMenu.ItemIndicator>
          {itemName}
        </DropdownMenu.Item>
      ))}
    </>
  );
}

function addDeapNode(node: TreeNode, child: TreeNode): TreeNode {
  if (node.children.filter((child) => { return ["scenario", "vehicle"].includes(child.nodeType) }).length === 0) {
    return addChild(node, child);
  }
  const lastChild = node.children[node.children.length - 1];
  return {
    ...node,
    children: [
      ...node.children.slice(0, -1),
      addDeapNode(lastChild, child),
    ],
  };
}

function DropdownMenuComponents() {
  const [open, setOpen] = useState(false);

  const [nodeTree, setNodeTree, ..._] = useContext(NodeStateContext);

  const handleItemClick = (
    item: string | Model.Patient | Model.Vehicle
  ) => {
    if (typeof item === 'string')
      setNodeTree(addDeapNode(nodeTree, createNode(item)));
    if (peopleItems.includes(item as Model.Patient))
      setNodeTree(addDeapNode(nodeTree, createPatientNode(item as Model.Patient)));
    if (vehicleItems.includes(item as Model.Vehicle))
      setNodeTree(addDeapNode(nodeTree, createVehicleNode(item as Model.Vehicle)));
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
              [occupant_1.name ?? "Unknown", occupant_2.name ?? "Unknown", occupant_3.name ?? "Unknown"],
              peopleItems,

              "Personer",
              handleItemClick,
            )}
            <DropdownMenu.Separator className="DropdownMenuSeparator" />
            {createMenuItems(
              [vehicle_1.model?.value ?? "Unknown"],
              vehicleItems,

              "Fordon",
              handleItemClick,
            )}
            <DropdownMenu.Separator className="DropdownMenuSeparator" />
            {createMenuItems(
              environmentItems,
              environmentItems,

              "Miljö",
              handleItemClick,
            )}
            <DropdownMenu.Separator className="DropdownMenuSeparator" />
            {createMenuItems(
              medicalData,
              medicalData,

              "Medicinsk Data",
              handleItemClick,
            )}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}

export default DropdownMenuComponents;
