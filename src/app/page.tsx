import Header from "@/components/Header";
import HeroMapSection from "@/components/HeroMapSection";
import ADCESection from "@/components/ADCESection";
import AboutUsSection from "@/components/AboutUsSection";
import ContactsSection from "@/components/ContactsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroMapSection />
      <ADCESection />
      <AboutUsSection />
      <ContactsSection />
    </div>
  );
}
