import "app/style.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon, PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
// import TreeListComponent from "./treeListComponent";
// import { TreeList, Leaf } from "./treeList";


// // Instantiate TreeList and add example data
// const treeList = new TreeList("Giant planets");
// const gasGiants = new Leaf("Gas giants");
// gasGiants.children.push(new Leaf("Jupiter"));
// gasGiants.children.push(new Leaf("Saturn"));

// const iceGiants = new Leaf("Ice giants");
// iceGiants.children.push(new Leaf("Uranus"));
// iceGiants.children.push(new Leaf("Neptune"));

// treeList.addLeaf(gasGiants);
// treeList.addLeaf(iceGiants);


let peopleItems: string[] = [
  "Kalle",
  "Britta",
  "Lasse",
  "Vuxen",
  "Barn/Ungdom",
  "65+ person",
];

let vehicleItems: string[] = ["Bil"];

let environmentItems: string[] = ["Plats", "Väder"];

let medicalData: string[] = ["Patient Journal Data"];

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
          <p onClick={() => setOpen(true)}>Lägg till komponenter</p>
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
      {/* <TreeList treeList={treeList} /> */}
    </div>
  );
}

export default DropdownMenuComponents;
