import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import KPISection from "@/components/kpi-section";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Specialities from "@/components/specialities";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <KPISection />
      <Specialities />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
