import Hero from "./sections/Hero";
import Features from "./sections/Features";
import About from "./sections/About";
import HowItWorks from "./sections/HowitWorks";
import Benefits from "./sections/Benefits";
import Departments from "./sections/Departments";
import ComplaintCategories from "./sections/ComplaintCategories";
import AIWorkflow from "./sections/AIWorkflow";
import Statistics from "./sections/Statistics";
import Testimonials from "./sections/Testimonials";
import Vision from "./sections/Vision";
import WhyChooseUs from "./sections/WhyChooseUs";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import CTA from "./sections/CTA";
import Newsletter from "./sections/Newsletter";

const Landing = () => {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-slate-950">

      {/* Hero Section */}
      <Hero />

      {/* Platform Features */}
      <Features />

      {/* About Vision Forge */}
      <About />

      {/* Vision & Mission */}
      <Vision />

      {/* AI Workflow */}
      <AIWorkflow />

      {/* Complaint Workflow */}
      <HowItWorks />

      {/* Live Statistics */}
      <Statistics />

      {/* Municipal Departments */}
      <Departments />

      {/* Complaint Categories */}
      <ComplaintCategories />

      {/* Benefits */}
      <Benefits />

      {/* Why Choose Vision Forge */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Contact */}
      <Contact />

      {/* Call To Action */}
      <CTA />

      {/* Newsletter */}
      <Newsletter />

    </div>
  );
};

export default Landing;