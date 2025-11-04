import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { PracticeGrid } from "@/components/PracticeGrid";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <PracticeGrid />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
