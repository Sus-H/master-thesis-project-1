import "app/style.css";
import { DropdownMenu } from "radix-ui";
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from "@radix-ui/react-icons";
import React from "react";


function DropdownMenuParameters() {
    const [open, setOpen] = React.useState(false);
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <p onClick={() => setOpen(true)}>Välj Parametrar</p>
            </DropdownMenu.Trigger>


            <DropdownMenu.Portal>
                <DropdownMenu.Content className="DropdownMenuContent">
                    <DropdownMenu.Separator className="DropdownMenuSeparator" />
                    <DropdownMenu.Label className="DropdownMenuLabel">
                        People
                    </DropdownMenu.Label>

                    <DropdownMenu.CheckboxItem
                        className="DropdownMenuCheckboxItem"
                        checked={bookmarksChecked}
                        onCheckedChange={setBookmarksChecked}
                        onSelect={(event) => event.preventDefault()}
                    >
                        <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                            <CheckIcon />
                        </DropdownMenu.ItemIndicator>
                        Show Bookmarks <div className="RightSlot">⌘+B</div>
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
                        Show Full URLs
                    </DropdownMenu.CheckboxItem>

                    <DropdownMenu.Separator className="DropdownMenuSeparator" />

                    <DropdownMenu.Label className="DropdownMenuLabel">
                        People
                    </DropdownMenu.Label>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}

export default DropdownMenuParameters;
