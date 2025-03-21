import { NavButton } from "components/nav-button";
import AlgorithmCards from "components/algorithmCard";

export function AlgorithmBrowser() {
  return (
    <div className="w-screen">
      <AlgorithmCards></AlgorithmCards>
      <button className="border hover:underline active:bg-amber-700">
        Aktivera Algoritm
      </button>
    </div>
  );
}
