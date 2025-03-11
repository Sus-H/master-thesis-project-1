import { NavBar } from "components/nav-bar";
import { NavButton } from "components/nav-button";

export default function Home() {
  return <div>
    hello, welcome home
    <NavBar/>
    <NavButton to="page_1">Page 1</NavButton>
  </div>;
}
