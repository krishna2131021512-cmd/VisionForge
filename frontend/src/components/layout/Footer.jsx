import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              VF
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">
                Vision Forge
              </h2>

              <p className="text-sm text-gray-400">
                Smart Civic Platform
              </p>
            </div>
          </div>

          <p className="text-sm leading-7 text-gray-400">
            Vision Forge is an AI-powered Smart Civic Issue
            Reporting & Resolution Platform that empowers
            citizens and municipal authorities to build
            cleaner, safer, and smarter cities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="hover:text-emerald-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-emerald-400 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#features"
                className="hover:text-emerald-400 transition"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#faq"
                className="hover:text-emerald-400 transition"
              >
                FAQ
              </a>
            </li>

            <li>
              <Link
                to="/login"
                className="hover:text-emerald-400 transition"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Contact
          </h3>

          <div className="space-y-4 text-sm">

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-emerald-400" />
              <span>support@visionforge.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-emerald-400" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="text-emerald-400 mt-1"
              />
              <span>
                Puducherry,
                <br />
                India
              </span>
            </div>

          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Connect
          </h3>

          <div className="flex gap-4">

            <a
              href="#"
              className="p-3 rounded-xl bg-gray-800 hover:bg-emerald-600 transition"
            >
              <Facebook size={20} />
            </a>

            <a
              href="#"
              className="p-3 rounded-xl bg-gray-800 hover:bg-emerald-600 transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="#"
              className="p-3 rounded-xl bg-gray-800 hover:bg-emerald-600 transition"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="#"
              className="p-3 rounded-xl bg-gray-800 hover:bg-emerald-600 transition"
            >
              <Github size={20} />
            </a>

          </div>

          <p className="text-sm text-gray-500 mt-6">
            Building smarter cities through AI,
            transparency and citizen collaboration.
          </p>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-sm text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} Vision Forge.
          All Rights Reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-white hover:bg-emerald-700 transition"
        >
          <ArrowUp size={18} />
          Back to Top
        </button>

      </div>
    </footer>
  );
};

export default Footer;