
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LabOverview from "@/components/LabOverview";
import EquipmentInventory from "@/components/EquipmentInventory";
import LabSchedule from "@/components/LabSchedule";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <main>
        <LabOverview />
        <EquipmentInventory />
        <LabSchedule />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
