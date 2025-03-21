import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

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
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<
    null | (typeof algorithms)[number]
  >(null);

  const [enabledAlgorithms, setEnabledAlgorithms] = useState<{
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
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Cards Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          flex: 2,
        }}
      >
        {algorithms.map((algorithm) => (
          <CCard
            key={algorithm.title}
            style={{
              width: "18rem",
              cursor: "pointer",
              wordWrap: "break-word",
            }}
            onClick={() => handleCardClick(algorithm)}
          >
            <CCardImage
              orientation="top"
              src={algorithm.image}
              style={{
                width: "100%", // Ensures the image spans the card width
                height: "200px", // Fixed height for all images
                objectFit: "cover", // Ensures the image scales properly without distortion
              }}
            />
            <CCardBody
              style={{
                height: "180px", // Fixed height for the text container
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Ensures the button is at the bottom
              }}
            >
              <div>
                <CCardTitle>{algorithm.title}</CCardTitle>
                <CCardText
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3, // Limit to 3 lines of text
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {algorithm.description}
                </CCardText>
              </div>
              <CButton
                color={
                  enabledAlgorithms[algorithm.title]
                    ? "success"
                    : "primary"
                }
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the card click
                  handleEnableClick(algorithm.title);
                }}
              >
                {enabledAlgorithms[algorithm.title] ? (
                  <>
                    Enabled <span>✔</span>
                  </>
                ) : (
                  "Enable"
                )}
              </CButton>
            </CCardBody>
          </CCard>
        ))}
      </div>

      {/* Information Panel */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          width: "screen",
        }}
      >
        {selectedAlgorithm ? (
          <>
            <img
              src={selectedAlgorithm.image}
              alt={selectedAlgorithm.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                marginBottom: "16px",
                borderRadius: "8px",
              }}
            />
            <h3>{selectedAlgorithm.title}</h3>
            <p>{selectedAlgorithm.description}</p>
            <p>
              <strong>Origin:</strong>{" "}
              {selectedAlgorithm.details.origin}
            </p>
            <p>
              <strong>Cost:</strong> {selectedAlgorithm.details.cost}
            </p>
            <p>
              <strong>Certificates:</strong>
            </p>
            <ul>
              {selectedAlgorithm.certificates.map(
                (certificate, index) => (
                  <li key={index}>{certificate}</li>
                )
              )}
            </ul>
          </>
        ) : (
          <p>
            Klicka på ett kort för att se mer information om
            algoritmen.
          </p>
        )}
      </div>
    </div>
  );
}