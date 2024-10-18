import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="h-screen font-roboto text-4xl flex flex-col text-violet-800">
      <NavBar />
      <HeroSection />
      <FeatureSection />
    </div>
  );
};

export default App;