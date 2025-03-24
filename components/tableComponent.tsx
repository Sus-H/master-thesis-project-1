import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
const THEME = {
  Table: `
    display: table;
    width: 100%;
    border-collapse: collapse;
  `,
  Header: `
    display: table-header-group;
  `,
  Body: `
    display: table-row-group;
    
  `,
  Row: `
    display: table-row;
  `,
  Cell: `
    display: table-cell;
    padding: 8px;
    border: 1px solid var(--theme-ui-colors-border);
  `,
  HeaderRow: `
    display: table-row;
  `,
  HeaderCell: `
    display: table-cell;
    font-weight: bold;
    text-align: left;
    padding: 8px;
    border-bottom: 2px solid var(--theme-ui-colors-border);
  `,
};

// Definiera tabelldata för jämförelsen mellan SIRP och OSISP
const nodes = [
  {
    id: "1",
    faktor: "Triage-metod",
    sirp: "Allvarlighetsbaserad triage – prioriterar livshotande fall först.",
    osisp:
      "Systembaserad triage – balanserar allvarlighetsgrad och resursanvändning.",
  },
  {
    id: "2",
    faktor: "Förare (16 år)",
    sirp: "🔴 Omedelbar vård (Prioritet 1) – Hög risk för inre blödningar, snabb transport krävs.",
    osisp:
      "🔴 Omedelbar vård (Prioritet 1) – Hög sannolikhet för försämring.",
  },
  {
    id: "3",
    faktor: "Framsätespassagerare (44 år)",
    sirp: "🟡 Brådskande vård (Prioritet 2) – Kräver övervakning men är stabil.",
    osisp:
      "🟡 Brådskande vård (Prioritet 2) – Transporteras efter kritiska patienter.",
  },
  {
    id: "4",
    faktor: "Baksätespassagerare (70 år)",
    sirp: "🔴 Omedelbar vård (Prioritet 1) – Skörhet ökar dödlighetsrisken.",
    osisp:
      "🔴 Omedelbar vård (Prioritet 1) – Ålder och skador kräver prioritet.",
  },
  {
    id: "5",
    faktor: "Antal ambulanser",
    sirp: "🚑 3 ambulanser – Två för Prioritet 1, en för Prioritet 2.",
    osisp:
      "🚑 2 ambulanser – Samtransport av stabila patienter vid behov.",
  },
  {
    id: "6",
    faktor: "Användning av helikopter",
    sirp: "🚁 Möjlig användning för 70-åringen om förseningar uppstår.",
    osisp: "🚁 Större sannolikhet att aktivera lufttransport tidigt.",
  },
  {
    id: "7",
    faktor: "Resursfördelning",
    sirp: "Standard traumatriage baserat på skadans allvar.",
    osisp:
      "Effektiv resursfördelning för att minska belastning på akutsjukvård.",
  },
  {
    id: "8",
    faktor: "Transport till sjukhus",
    sirp: "🏥 Direkttransport till traumacenter för kritiska patienter.",
    osisp:
      "🏥 Fördelar patienter mellan olika sjukhus för att minska överbelastning.",
  },
  {
    id: "9",
    faktor: "Risk för över-triagering",
    sirp: "⚠️ Risk att fler patienter klassas som ”kritiska” än nödvändigt.",
    osisp:
      "✅ Bättre balans, men kan innebära att stabila patienter får vänta längre.",
  },
  {
    id: "10",
    faktor: "Effektivitet i räddningsinsats",
    sirp: "🚑 Snabbast möjliga transport för de svårast skadade.",
    osisp:
      "⏳ Mer balanserad process baserad på skadornas utveckling.",
  },
];

const denseNodes = [
  {
    id: "2",
    faktor: "Förare (16 år)",
    sirp: "🔴Prioritet 1",
    osisp: "🔴Prioritet 1",
  },
  {
    id: "3",
    faktor: "Framsätespassagerare (44 år)",
    sirp: "🟡Prioritet 2",
    osisp: "🟡 Prioritet 2",
  },
  {
    id: "4",
    faktor: "Baksätespassagerare (70 år)",
    sirp: "🔴Prioritet 1",
    osisp: "🔴Prioritet 1",
  },
  {
    id: "5",
    faktor: "Antal ambulanser",
    sirp: "🚑 3 ambulanser",
    osisp: "🚑 2 ambulanser",
  },
];

export const TableComponent = () => {
  const data = { nodes };

  const theme = useTheme(THEME);

  return (
    <Table
      data={data}
      theme={theme}
      layout={{ fixedHeader: true }}
    >
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>Faktor</HeaderCell>
              <HeaderCell>SIRP-algoritmen</HeaderCell>
              <HeaderCell>OSISP-algoritmen</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((item) => (
              <Row
                key={item.id}
                item={item}
              >
                <Cell>{item.faktor}</Cell>
                <Cell>{item.sirp}</Cell>
                <Cell>{item.osisp}</Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  );
};

export const DenseTableComponent = () => {
  const data = { nodes: denseNodes };

  const theme = useTheme({
    Table: `
      display: table;
      width: 50%;
      border-collapse: collapse;
      font-size: 14px
    `,
    Header: `
      display: table-header-group;
    `,
    Body: `
      display: table-row-group;
    `,
    Row: `
      display: table-row;
    `,
    Cell: `
      display: table-cell;
      padding: 8px;
      border: 1px solid var(--theme-ui-colors-border);
      font-size: 12px
    `,
    HeaderRow: `
      display: table-row;
    `,
    HeaderCell: `
      display: table-cell;
      font-weight: bold;
      text-align: left;
      padding: 8px;
      border-bottom: 2px solid var(--theme-ui-colors-border);
    `,
  });

  return (
    <Table
      data={data}
      theme={theme}
      layout={{ fixedHeader: true }}
    >
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>Faktor</HeaderCell>
              <HeaderCell>SIRP</HeaderCell>
              <HeaderCell>OSISP</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((item) => (
              <Row
                key={item.id}
                item={item}
              >
                <Cell>{item.faktor}</Cell>
                <Cell>{item.sirp}</Cell>
                <Cell>{item.osisp}</Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  );
};
