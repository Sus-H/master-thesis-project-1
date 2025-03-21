import { NavButton } from "components/nav-button";
import { TableComponent } from "components/tableComponent";

export default function PageSummary() {
  return (
    <div>
      Summary View
      <NavButton to="/">Home</NavButton>
      <TableComponent></TableComponent>
    </div>
  );
}
