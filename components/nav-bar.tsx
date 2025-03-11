import { NavButton } from "./nav-button";

export function NavBar() {
  return <div>
    <div>
      <div className="grid grid-cols-4 items-center mx-5 sm:fle gap-5 sm:gap-20 justify-center">

          <NavButton to="/">Home</NavButton>
          <NavButton to="/page_mindmap">Mindmap</NavButton>
          <NavButton to="/page_dashboard">Dashboard</NavButton>
          <NavButton to="/page_summary">Summary</NavButton>
      </div>
    </div>
  </div>      
}