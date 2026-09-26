import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import Certificates from "@/components/Certificates/Certificates";
import TechMarquee from "@/components/TechMarquee/TechMarquee";
import GitHubSection from "@/components/GitHubSection/GitHubSection";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
