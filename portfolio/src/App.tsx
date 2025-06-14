import { useState } from "react";
import { FaGoogle, FaSearch } from "react-icons/fa";
import About from "./pages/about";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Timeline from "./pages/timeline";
import Technologies from "./pages/technologies";
import HomeG from "./pages/homeG";
import AboutG from "./pages/aboutG";
import PortfolioG from "./pages/portfolioG";
import TimelineG from "./pages/timelineG";
import TechnologiesG from "./pages/technologiesG";
import { COLORS } from "./constants/constant";

const screens = [
  { name: "Home", comp: Home },
  { name: "About", comp: About },
  { name: "Portfolio", comp: Portfolio },
  { name: "Timeline", comp: Timeline },
  { name: "Technologies", comp: Technologies },
];

const screensG = [
  { name: "Home", comp: HomeG },
  { name: "About", comp: AboutG },
  { name: "Portfolio", comp: PortfolioG },
  { name: "Timeline", comp: TimelineG },
  { name: "Technologies", comp: TechnologiesG },
];

function App() {
  const [activeAI, setActiveAI] = useState<"gemini" | "deepseek">("deepseek");
  const [showNames, setShowNames] = useState(false);

  const toggleAI = (ai: "gemini" | "deepseek") => {
    setActiveAI(ai);
  };

  // Determine which screens to show
  const currentScreens = activeAI === "deepseek" ? screens : screensG;

  return (
    <div className="bg-white text-black font-mono relative min-h-screen">
      {/* Floating toggle buttons */}
      <div
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 z-50 items-center p-1 rounded-full bg-gray-100 shadow-lg border border-gray-200"
        onMouseEnter={() => setShowNames(true)}
        onMouseLeave={() => setShowNames(false)}
      >
        <button
          className={`flex items-center gap-2 p-2 rounded-full transition-all duration-300 ${
            activeAI === "deepseek"
              ? "bg-blue-600 text-white shadow-inner"
              : "bg-transparent text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => toggleAI("deepseek")}
        >
          <FaSearch className="text-lg" />
          <span
            className={`transition-all duration-300 ${
              showNames
                ? "w-auto opacity-100 px-2"
                : "w-0 opacity-0 overflow-hidden"
            }`}
          >
            Deepseek
          </span>
        </button>

        <div className="h-6 w-px bg-gray-300 mx-1"></div>

        <button
          className={`flex items-center gap-2 p-2 rounded-full transition-all duration-300 ${
            activeAI === "gemini"
              ? "bg-blue-600 text-white shadow-inner"
              : "bg-transparent text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => toggleAI("gemini")}
        >
          <FaGoogle className="text-lg" />
          <span
            className={`transition-all duration-300 ${
              showNames
                ? "w-auto opacity-100 px-2"
                : "w-0 opacity-0 overflow-hidden"
            }`}
          >
            Gemini
          </span>
        </button>
      </div>

      {/* Page Sections */}
      {currentScreens.map((item, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: idx % 2 === 0 ? COLORS.DARKBLUE : COLORS.BLUE,
          }}
        >
          <item.comp />
        </div>
      ))}
    </div>
  );
}

export default App;
