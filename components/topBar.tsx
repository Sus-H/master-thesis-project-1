import { NavButton } from "./nav-button";
import DropdownMenuComponents from "./dropdownMenuComponent";
import { DropdownMenuAlgorithm } from "./dropdownMenuAlgorithm";

export function TopBar() {
  return (
    <div>
      <div className="p-2">
        <div className="flex items-center mx-5 justify-between">
          <div>
            <NavButton to="/home">
              <p>
                <img
                  src="images/DHS_Icon.svg"
                  alt=""
                  className="inline pr-5"
                />
                Min nya simulering
              </p>
            </NavButton>
          </div>
          <div className="flex gap-5">
            <button className="hover:underline">
              <DropdownMenuComponents />
            </button>
            <button className="hover:underline">
              <DropdownMenuAlgorithm />
            </button>
            <button className="hover:underline h-full">
              <img
                src="images/Folder_plus.svg"
                className="inline"
              />
              Importera Extern Data
            </button>
          </div>
          <div className="flex gap-5">
            <button className="hover:underline text-white bg-sky-500 px-2 py-1 rounded">
              <img
                src="images/Download.svg"
                className="inline"
              />
              Ladda ner
            </button>
            <button className="hover:underline text-white bg-sky-500 px-2 py-1 rounded">
              <img
                src="images/Share_2.svg"
                className="inline"
              />
              Dela
            </button>
            <button className="hover:underline text-white bg-sky-500 px-2 py-1 rounded">
              <img
                src="images/Share.svg"
                className="inline"
              />
              Exportera
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
