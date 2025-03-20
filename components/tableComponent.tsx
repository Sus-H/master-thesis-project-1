import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(factor: string, sirp: string, osisp: string) {
  return { factor, sirp, osisp };
}

const rows = [
  createData(
    "Triage-metod",
    "Allvarlighetsbaserad triage – prioriterar livshotande fall först.",
    "Systembaserad triage – balanserar allvarlighetsgrad och resursanvändning."
  ),

  createData(
    "Förare (16 år)",
    "Omedelbar vård (Prioritet 1) : Hög risk för inre blödningar, snabb transport krävs.",
    "Omedelbar vård (Prioritet 1) : Hög sannolikhet för försämring."
  ),

  createData(
    "Framsätespassagerare (44 år)",
    "Brådskande vård (Prioritet 2) : Kräver övervakning men är stabil.",
    "Brådskande vård (Prioritet 2) : Transporteras efter kritiska patienter."
  ),

  createData(
    "Baksätespassagerare (70 år)",
    "Omedelbar vård (Prioritet 1) : Skörhet ökar dödlighetsrisken.",
    "Omedelbar vård (Prioritet 1) : Ålder och skador kräver prioritet."
  ),

  createData(
    "Antal ambulanser",
    "3 ambulanser : Två för Prioritet 1, en för Prioritet 2.",
    "2 ambulanser : Samtransport av stabila patienter vid behov."
  ),

  createData(
    "Användning av helikopter",
    "Möjlig användning för 70-åringen om förseningar uppstår.",
    "Större sannolikhet att aktivera lufttransport tidigt."
  ),

  createData(
    "Resursfördelning",
    "Standard traumatriage baserat på skadans allvar.",
    "Effektiv resursfördelning för att minska belastning på akutsjukvård."
  ),

  createData(
    "Transport till sjukhus",
    "Direkttransport till traumacenter för kritiska patienter.",
    "Fördelar patienter mellan olika sjukhus för att minska överbelastning."
  ),

  createData(
    "Risk för över-triagering",
    "Risk att fler patienter klassas som ”kritiska” än nödvändigt.",
    "Bättre balans, men kan innebära att stabila patienter får vänta längre."
  ),

  createData(
    "Effektivitet i räddningsinsats",
    "Snabbast möjliga transport för de svårast skadade.",
    "Mer balanserad process baserad på skadornas utveckling."
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="Jämförelse av triagemetoder"
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Faktor</strong>
            </TableCell>
            <TableCell align="left">
              <strong>SIRP-algoritmen</strong>
            </TableCell>
            <TableCell align="left">
              <strong>OSISP-algoritmen</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.factor}>
              <TableCell
                component="th"
                scope="row"
              >
                {row.factor}
              </TableCell>
              <TableCell align="left">{row.sirp}</TableCell>
              <TableCell align="left">{row.osisp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        size="small"
        aria-label="Jämförelse av triagemetoder"
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Faktor</strong>
            </TableCell>
            <TableCell align="left">
              <strong>SIRP-algoritmen</strong>
            </TableCell>
            <TableCell align="left">
              <strong>OSISP-algoritmen</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.factor}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell
                component="th"
                scope="row"
              >
                {row.factor}
              </TableCell>
              <TableCell align="left">{row.sirp}</TableCell>
              <TableCell align="left">{row.osisp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
