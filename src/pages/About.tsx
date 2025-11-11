import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// About sections
import AboutHero from "@/components/sections/about/AboutHero";
import AboutUs from "@/components/sections/about/AboutUs";
import Team from "@/components/sections/about/Team";
import ContactUs from "@/components/sections/about/ContactUs";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutHero />
        <AboutUs />
        <Team />
        <div id="contact-form">
          <ContactUs />
        </div>
      </main>

    </div>
  );
};

export default About;