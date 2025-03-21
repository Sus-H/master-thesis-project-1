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
      "SIRP is a severity-based triage algorithm that prioritizes life-threatening cases first.",
    details: {
      origin: "Developed by Emergency Response Systems Inc.",
      cost: "$500 per license annually",
    },
    image: "/images/algorithm_image_1.jpg",
  },
  {
    title: "OSISP",
    description:
      "OSISP balances severity and resource utilization for efficient triage.",
    details: {
      origin: "Created by Global Health Analytics",
      cost: "$700 per license annually",
    },
    image: "/images/algorithm_image_4.jpg",
  },
  {
    title: "URGENCY",
    description:
      "URGENCY focuses on rapid assessment and prioritization of critical patients.",
    details: {
      origin: "Designed by Rapid Response Labs",
      cost: "$600 per license annually",
    },
    image: "/images/algorithm_image_3.jpg",
  },
  {
    title: "OnStar",
    description:
      "OnStar provides real-time crash data to assist emergency responders.",
    details: {
      origin: "Developed by OnStar Corporation",
      cost: "$800 per license annually",
    },
    image: "/images/algorithm_image_4.jpg",
  },
  {
    title: "D-call NET",
    description:
      "D-call NET predicts injury severity using advanced telematics.",
    details: {
      origin: "Created by Telematics Solutions Ltd.",
      cost: "$900 per license annually",
    },
    image: "/images/algorithm_image_4.jpg",
  },
  {
    title: "Nidhimoto",
    description:
      "Nidhimoto is an algorithm designed for optimizing emergency response times.",
    details: {
      origin: "Developed by Nidhimoto Research Group",
      cost: "$400 per license annually",
    },
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
            <Typography variant="subtitle1">
              <strong>Cost:</strong> {selectedAlgorithm.details.cost}
            </Typography>
          </>
        ) : (
          <Typography
            variant="body1"
            color="text.secondary"
          >
            Click on a card to see more information about the
            algorithm.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
