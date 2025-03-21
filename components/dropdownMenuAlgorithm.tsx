import { AlgorithmBrowser } from "./algorithmBrowser";
import { useState } from "react";
import "app/styles.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const DropdownMenuAlgorithm = () => {
  const [open, setOpen] = useState(false);

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
            alt="Open"
          />
          Algoritm Utforskaren
          <ChevronDownIcon className="inline"></ChevronDownIcon>
        </p>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent relative top-10 ">
          <ScrollArea.Root>
            <ScrollArea.Viewport className="size-full">
              <AlgorithmBrowser />
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical">
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
          </ScrollArea.Root>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
