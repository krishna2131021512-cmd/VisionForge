import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import About from "../../components/landing/About";
import Vision from "../../components/landing/Vision";
import AIWorkflow from "../../components/landing/AIWorkflow";
import HowItWorks from "../../components/landing/HowItWorks";
import Statistics from "../../components/landing/Statistics";
import Departments from "../../components/landing/Departments";
import ComplaintCategories from "../../components/landing/ComplaintCategories";
import Benefits from "../../components/landing/Benefits";
import WhyChooseUs from "../../components/landing/WhyChooseUs";
import Testimonials from "../../components/landing/Testimonials";
import FAQ from "../../components/landing/FAQ";
import Contact from "../../components/landing/Contact";
import CTA from "../../components/landing/CTA";
import Newsletter from "../../components/landing/Newsletter";

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