import Hero from "../sections/Hero";
import HomeIntro from "../sections/HomeIntro";
import AgenticExposure from "../sections/AgenticExposure";
import EnterpriseClients from "../sections/EnterpriseClients";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-[#8c9090] selection:bg-[#1C1D20] selection:text-white">
      <Hero />
      <HomeIntro />
      <EnterpriseClients />
      <AgenticExposure />
      <Footer />
    </div>
  );
}
