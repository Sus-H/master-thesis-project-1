import { ScrollArea } from "radix-ui";
import SimpleLineChart, {
  ResourceBarChart,
  SurvivalLineChart,
} from "./lineChart";
import { DenseTableComponent } from "./tableComponent";
import { NavButton } from "./nav-button";
import {
  ArrowRightIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import { useState, useRef, useEffect } from "react";
import SummaryText from "./summaryText";

const SideBarRight = () => {
  // State to control the visibility of the results
  const [showResults, setShowResults] = useState(false);
  const [showChevron, setShowChevron] = useState(true); // State for Chevron visibility
  const scrollAreaRef = useRef(null);

  const handleCalculateResults = () => {
    setShowResults((prev) => !prev); // Toggle visibility
  };

  // Hide the Chevron when scrolling starts
  useEffect(() => {
    const handleScroll = () => {
      if (scrollAreaRef.current.scrollTop > 0) {
        setShowChevron(false);
      } else {
        setShowChevron(true);
      }
    };

    const scrollArea = scrollAreaRef.current;
    if (scrollArea) {
      scrollArea.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollArea) {
        scrollArea.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Scroll down when the chevron is clicked
  const handleChevronClick = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollBy({
        top: 700, // Scroll down by 100px
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <ScrollArea.Root className="h-screen w-[400px] bg-white">
      <ScrollArea.Viewport
        className="size-full rounded"
        ref={scrollAreaRef}
      >
        {/* Button to toggle results */}
        <button
          onClick={handleCalculateResults}
          className="border px-4 mb-3 py-2 bg-[#6e56cf] text-white rounded hover:bg-purple-600"
        >
          {showResults ? "Göm Resultat" : "Beräkna Resultat"}
        </button>

        {/* Conditionally Render Results */}
        {showResults && (
          <>
            <p className="text-xl">Summering</p>
            <div className="text-sm">
              <p>Aktiva algoritmer:</p>
              <p>SIRP - Serious Injury Risk Prediction</p>
              <p>OSISP - On Scene Injury Severity Prediction</p>
            </div>
            <SummaryText></SummaryText>

            {/* Chevron Icon with Bounce Animation */}
            <div
              className={`flex justify-center ${
                showChevron ? "bounce" : "hidden"
              }`}
            >
              <ChevronDownIcon
                className="w-6 h-6 text-gray-500 cursor-pointer"
                onClick={handleChevronClick} // Add click handler
              />
            </div>

            <p className="mb-5"></p>
            <NavButton to="/page_summary">
              <p className="border px-4 py-2 bg-[#6e56cf] text-white rounded hover:bg-purple-600">
                Visa Detaljerad summering
                <ArrowRightIcon className="inline"></ArrowRightIcon>
              </p>
            </NavButton>
            <p className="text-xl">Beräknad resursplan</p>
            <DenseTableComponent />
            <div className="grid gap-5">
              <ResourceBarChart />
              <SurvivalLineChart />
            </div>
          </>
        )}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};

export default SideBarRight;
