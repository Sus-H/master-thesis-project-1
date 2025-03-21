import { NavButton } from "./nav-button";
import DropdownMenuComponents from "./dropdownMenuComponent";
import { DropdownMenuAlgorithm } from "./dropdownMenuAlgorithm";

export function TopBar() {
  return (
    <div>
      <div className="p-2 bg-sky-800">
        <div className="flex items-center mx-5 justify-between">
          <div className="flex items-center">
          <NavButton to="/">
            <img
                  src="images/DHS_Icon.svg"
                  alt=""
                  className="inline pr-5"
                />
            </NavButton>
            <NavButton to="/home">
              <p>
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
                className="inline pr-1"
              />
              Importera Extern Data
            </button>
          </div>
          <div className="flex gap-3 justify-evenly items-center">
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

export function TopBarStartingPage() {
  return (
    <div>
      <div className="p-2">
        <div className="flex items-center mx-5 justify-between">
          <div className="flex items-center ">
            <NavButton to="/">
            <img
                  src="images/DHS_Icon.svg"
                  alt=""
                  className="inline pr-5"
                />
            </NavButton>
            <NavButton to="/home">
              <p>
                DHS Sandbox
              </p>
            </NavButton>
          </div>
          <div className="flex gap-5">
            <button className="hover:underline text-white bg-sky-500 px-2 py-1 rounded">
              <img
                src="images/Globe.svg"
                className="inline pr-2"
              />
              Nyheter
            </button>
            <button className="hover:underline text-white bg-sky-500 px-2 py-1 rounded">
              <img
                src="images/Bell.svg"
                className="inline pr-2"
              />
              Notiser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
