import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CheckIcon } from "@radix-ui/react-icons";

const algorithms = [
  {
    title: "SIRP",
    description:
      "SIRP är en allvarlighetsbaserad triage-algoritm som prioriterar livshotande fall först.",
    details: {
      origin: "Utvecklad av Emergency Response Systems Inc.",
      cost: "500 USD per licens årligen",
    },
    certificates: ["ISO 13485:2016", "CE-certifierad", "FDA-godkänd"],
    image: "/images/algorithm_image_1.jpg",
  },
  {
    title: "OSISP",
    description:
      "OSISP balanserar allvarlighetsgrad och resursanvändning för effektiv triage.",
    details: {
      origin: "Skapad av Global Health Analytics",
      cost: "700 USD per licens årligen",
    },
    certificates: ["ISO 9001:2015", "CE-certifierad"],
    image: "/images/algorithm_image_4.jpg",
  },
  {
    title: "URGENCY",
    description:
      "URGENCY fokuserar på snabb bedömning och prioritering av kritiska patienter.",
    details: {
      origin: "Designad av Rapid Response Labs",
      cost: "600 USD per licens årligen",
    },
    certificates: ["ISO 27001:2013", "CE-certifierad"],
    image: "/images/algorithm_image_3.jpg",
  },
  {
    title: "OnStar",
    description:
      "OnStar tillhandahåller realtidsdata om olyckor för att hjälpa räddningstjänsten.",
    details: {
      origin: "Utvecklad av OnStar Corporation",
      cost: "800 USD per licens årligen",
    },
    certificates: ["ISO 22301:2019", "FDA-godkänd"],
    image: "/images/algorithm_image_4.jpg",
  },
  {
    title: "D-call NET",
    description:
      "D-call NET förutspår skadans allvar med hjälp av avancerad telematik.",
    details: {
      origin: "Skapad av Telematics Solutions Ltd.",
      cost: "900 USD per licens årligen",
    },
    certificates: ["ISO 13485:2016", "CE-certifierad"],
    image: "/images/algorithm_image_4.jpg",
  },
  {
    title: "Nidhimoto",
    description:
      "Nidhimoto är en algoritm designad för att optimera responstider vid nödsituationer.",
    details: {
      origin: "Utvecklad av Nidhimoto Research Group",
      cost: "400 USD per licens årligen",
    },
    certificates: ["ISO 9001:2015", "CE-certifierad"],
    image: "/images/algorithm_image_1.jpg",
  },
];

export default function AlgorithmCards() {
  const [selectedAlgorithm, setSelectedAlgorithm] = React.useState<
    null | (typeof algorithms)[number]
  >(null);
  const [enabledAlgorithms, setEnabledAlgorithms] = React.useState<{
    [key: string]: boolean;
  }>({});

  const handleCardClick = (algorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  const handleEnableClick = (title: string) => {
    setEnabledAlgorithms((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      {/* Cards Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
          flex: 2,
        }}
      >
        {algorithms.map((algorithm) => (
          <Card
            key={algorithm.title}
            sx={{ maxWidth: 345, cursor: "pointer" }}
            onClick={() => handleCardClick(algorithm)}
          >
            <CardMedia
              component="img"
              height="140"
              image={algorithm.image}
              alt={algorithm.title}
              sx={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                backgroundColor: "var(--gray-5)",
              }}
            />
            <CardHeader
              title={algorithm.title}
              subheader="Algorithm Overview"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                {algorithm.description}
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{ justifyContent: "flex-end" }}
            >
              <Button
                variant="contained"
                color={
                  enabledAlgorithms[algorithm.title]
                    ? "success"
                    : "primary"
                }
                onClick={(e) => {
                  e.stopPropagation();
                  handleEnableClick(algorithm.title);
                }}
                startIcon={
                  enabledAlgorithms[algorithm.title] ? (
                    <CheckIcon />
                  ) : null
                }
              >
                {enabledAlgorithms[algorithm.title]
                  ? "Enabled"
                  : "Enable"}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>

      {/* Information Panel */}
      <Box
        sx={{
          flex: 1,
          padding: 3,
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {selectedAlgorithm ? (
          <>
            <CardMedia
              component="img"
              height="200"
              image={selectedAlgorithm.image}
              alt={selectedAlgorithm.title}
              sx={{ marginBottom: 2, borderRadius: "8px" }}
            />
            <Typography
              variant="h6"
              gutterBottom
            >
              {selectedAlgorithm.title}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
            >
              {selectedAlgorithm.description}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
            >
              <strong>Origin:</strong>{" "}
              {selectedAlgorithm.details.origin}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
            >
              <strong>Cost:</strong> {selectedAlgorithm.details.cost}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
            >
              <strong>Certificates:</strong>
            </Typography>
            <ul>
              {selectedAlgorithm.certificates.map(
                (certificate, index) => (
                  <li key={index}>
                    <Typography variant="body2">
                      {certificate}
                    </Typography>
                  </li>
                )
              )}
            </ul>
          </>
        ) : (
          <Typography
            variant="body1"
            color="text.secondary"
          >
            Klicka på ett kort för att se mer information om
            algoritmen.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
