import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Reveal><Clients /></Reveal>
      <Reveal><Services /></Reveal>
      <Reveal><Expertise /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </div>
  );
};

export default Index;
