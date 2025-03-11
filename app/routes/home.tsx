import { NavBar } from "components/nav-bar";
import { NavButton } from "components/nav-button";
import Slider from "components/slider";
import Checkbox from "components/checkbox";
import Scroll_area from "components/scroll_area";
import SimpleLineChart from "components/lineChart";
import Flow from "components/flow";

export default function Home() {
  return <div>
    hello, welcome home
    <NavBar/>
    <div>
      <Slider></Slider>
      <Checkbox></Checkbox>
      <Scroll_area></Scroll_area>
      <SimpleLineChart></SimpleLineChart>
    </div>
    <div className="border-8 border-amber-800 w-3xl h-3xl overflow-hidden">
      <Flow></Flow>
    </div>
  </div>;
}
