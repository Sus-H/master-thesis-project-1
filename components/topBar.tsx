import { NavButton } from "./nav-button";
import DropdownMenuComponents from "./dropdownMenuComponent";
import DropdownMenuParameters from "./dropdownMenuParameters";

export function TopBar() {
  return <div>
    <div className="p-2">
      <div className="flex items-center mx-5 justify-between">
        <div>
          <img src="images/DHS_Icon.svg" alt="" className="inline" />
            Min nya simulering
        </div>
        <div className="flex gap-5">
          <NavButton to="/">Hem</NavButton>
          <button className="hover:underline"><DropdownMenuComponents/></button>
          <button className="hover:underline"><DropdownMenuParameters/></button>
          
          <NavButton to="/page_algorithm_browser">Algoritm Utforskaren</NavButton>
          <button className="hover:underline"> Importera Extern Data </button>
        </div>
        <div className="flex gap-5">
          <button className="hover:underline">Ladda ner</button>
          <button className="hover:underline">Dela</button>
          <button className="hover:underline">Exportera</button>
        </div>
      </div>
    </div>
  </div>      
}