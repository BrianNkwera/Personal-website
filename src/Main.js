// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/Projects"
import { useTheme } from "./hooks/ThemeContext";

function MainComponent() {
  const darkTheme = useTheme();

  return (
    <div data-bs-theme={!darkTheme ? "light" : ""}>
      <h1 className="text-black">{darkTheme}</h1>
      <Navbar />
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
    </div>
  );
}

export default MainComponent;
