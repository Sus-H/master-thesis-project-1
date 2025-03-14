import "app/style.css";
import { DropdownMenu } from "radix-ui";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import React, { useState } from "react";
import TransitionsSnackbar from "./snackbar";
import HorizontalFlow from "./horizontalFlow";


function DropdownMenuComponents() {
  const [open, setOpen] = useState(false);
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleSnackbarOpen = () => setSnackbarOpen(true);
  const handleSnackbarClose = () => setSnackbarOpen(false);
  
  const handleAddComponent = () => {
    handleSnackbarOpen();
    HorizontalFlow();
  };

  return (
    <div>
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger asChild>
          <p onClick={() => setOpen(true)}>Lägg till komponenter</p>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="DropdownMenuContent">
            <DropdownMenu.Separator className="DropdownMenuSeparator" />
            <DropdownMenu.Label className="DropdownMenuLabel">Personer</DropdownMenu.Label>

            <DropdownMenu.CheckboxItem
              className="DropdownMenuCheckboxItem"
              checked={bookmarksChecked}
              onCheckedChange={setBookmarksChecked}
              onSelect={(event) => event.preventDefault()}
            >
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                <CheckIcon />
              </DropdownMenu.ItemIndicator>
              Kalle <div className="RightSlot">⌘+B</div>
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem
              className="DropdownMenuCheckboxItem"
              checked={urlsChecked}
              onCheckedChange={setUrlsChecked}
              onSelect={(event) => event.preventDefault()}
            >
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                <CheckIcon />
              </DropdownMenu.ItemIndicator>
              Lasse
            </DropdownMenu.CheckboxItem>

            <DropdownMenu.CheckboxItem
              className="DropdownMenuCheckboxItem"
              onSelect={handleAddComponent}
            >
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                <CheckIcon />
              </DropdownMenu.ItemIndicator>
              Lägg till komponent
            </DropdownMenu.CheckboxItem>

            <DropdownMenu.Separator className="DropdownMenuSeparator" />

            <DropdownMenu.Label className="DropdownMenuLabel">People</DropdownMenu.Label>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      <TransitionsSnackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message="Komponent tillagd"
      />
    </div>
  );
}

export default DropdownMenuComponents;