import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-600 py-24 text-white">

      {/* Background Blobs */}

      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="container-custom relative z-10">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 backdrop-blur-md">

            <Sparkles size={20} />

            <span className="font-medium">
              Join the Smart City Revolution
            </span>

          </div>

          <h2 className="text-4xl font-extrabold leading-tight lg:text-6xl">
            Ready to Make Your City Better?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-emerald-100">
            Report civic issues in seconds, track their progress in
            real-time, and help build a cleaner, safer, and smarter
            city with Vision Forge's AI-powered complaint management
            system.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              to="/register"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-emerald-700 transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get Started

              <ArrowRight size={20} />

            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition duration-300 hover:bg-white hover:text-emerald-700"
            >
              Login
            </Link>

          </div>

          {/* Stats */}

          <div className="mt-20 grid gap-8 md:grid-cols-4">

            <div>
              <h3 className="text-5xl font-bold">
                12K+
              </h3>

              <p className="mt-3 text-emerald-100">
                Complaints Solved
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                95%
              </h3>

              <p className="mt-3 text-emerald-100">
                Resolution Rate
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                15K+
              </h3>

              <p className="mt-3 text-emerald-100">
                Registered Citizens
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                24/7
              </h3>

              <p className="mt-3 text-emerald-100">
                Platform Availability
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;