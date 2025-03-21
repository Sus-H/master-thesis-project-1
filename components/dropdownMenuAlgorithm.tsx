import { AlgorithmBrowser } from "./algorithmBrowser";
import { useState } from "react";
import "app/styles.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
export const DropdownMenuAlgorithm = () => {
  const [open, setOpen] = useState(false); // Move useState inside the component

  return (
    <DropdownMenu.Root
      open={open}
      onOpenChange={setOpen}
    >
      <DropdownMenu.Trigger asChild>
        <p onClick={() => setOpen(true)}>
          <img
            src="images/Book_open.svg"
            className="inline"
          />
          Algoritm Utforskaren
        </p>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent">
          <AlgorithmBrowser />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
